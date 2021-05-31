import React, {useEffect, useRef, useState} from 'react'
import {connect} from "react-redux";
import {checkTodo, deleteTodo, editTodo, filteredTodos} from "../../redux/actions";
import {ENTER_KEY_CODE, ESC_KEY_CODE} from "./keysConst";
import style from './Todo.module.css'

const Todo = ({todo, deleteTodo, checkTodo, editTodo, click, clickEvent, filteredTodos}) => {

    const [editTodoTitle, setEditTodoTitle] = useState(todo.title)

    const checkTodoHandler = () => {
        checkTodo(todo.id);
        filteredTodos();
    }

    const editTodoHandler = () => {
        todo.edited = true;
        editTodo(todo)
    }

    const changeInputHandler = (event) => {
        setEditTodoTitle(event.currentTarget.value);
    }

    const keyDownHandler = (event) => {
        if (event.keyCode === ENTER_KEY_CODE || event.keyCode === ESC_KEY_CODE) {
            event.preventDefault();
            todo.edited = false;
            todo.title = editTodoTitle;
            editTodo(todo)
        }
    }

    const inputRef = useRef(null)
    useEffect(() => {
        function handleClickOutside(event) {
            if (click && inputRef.current && !inputRef.current.contains(event.target)) {
                clickEvent.preventDefault();
                todo.edited = false;
                todo.title = editTodoTitle;
                editTodo(todo)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    })

    return (
        <li className={todo.visibility ? style.item: style.hidden}>
            <div
                className={todo.edited? (style.hidden) : (todo.completed ? style.checkButtonCompleted : style.checkButtonActive)}
                onClick={checkTodoHandler}
            />

            {todo.edited ?
                (<form>
                    <input
                        type="text"
                        className={style.input}
                        value={editTodoTitle}
                        onChange={changeInputHandler}
                        onKeyDown={keyDownHandler}
                        ref={inputRef}
                    />
                </form>) :
                (<div className={todo.completed ? style.titleCompleted : style.titleActive} onDoubleClick={editTodoHandler}>{todo.title}</div>)}


            <button
                className={todo.edited? style.hidden : style.deleteButton}
                onClick={() => deleteTodo(todo.id)}
            >&times;</button>
        </li>
    )
}

const mapStateToProps = (state) => {
    return {
        click: state.click,
        clickEvent: state.clickEvent
    }

}

const mapDispatchToProps = {
    deleteTodo: id => deleteTodo(id),
    checkTodo: id => checkTodo(id),
    editTodo: id => editTodo(id),
    filteredTodos: () => filteredTodos()
}

export default connect(mapStateToProps, mapDispatchToProps) (Todo)