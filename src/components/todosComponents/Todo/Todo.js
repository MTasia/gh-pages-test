import React, {useEffect, useRef, useState} from 'react'
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {checkTodo, deleteTodo, editTitle, editTodo} from "../../../redux/reducer/todosReducer/todosSlicer";
import {ENTER_KEY_CODE, ESC_KEY_CODE} from "./keysConst";
import style from './Todo.module.css'
import {makeGetClick, makeGetClickEvent} from "../../../redux/selectors/todosSelector";

const Todo = ({todo, deleteTodoTodo, checkTodoTodo, editTitleTodo, editTodoTodo, click, clickEvent}) => {

    const [editTodoTitle, setEditTodoTitle] = useState(todo.title)

    const checkTodoHandler = () => {
        checkTodoTodo(todo.id);
    }

    const editTodoHandler = () => {
        editTodoTodo(todo)
    }

    const changeInputHandler = (event) => {
        setEditTodoTitle(event.currentTarget.value);
    }

    const keyDownHandler = (event) => {
        if (event.keyCode === ENTER_KEY_CODE || event.keyCode === ESC_KEY_CODE) {
            event.preventDefault();
            editTitleTodo(editTodoTitle)
            editTodoTodo(todo)
        }
    }

    const inputRef = useRef(null)
    useEffect(() => {
        function handleClickOutside(event) {
            if (click && inputRef.current && !inputRef.current.contains(event.target)) {
                clickEvent.preventDefault();
                editTitleTodo(editTodoTitle)
                editTodoTodo(todo)
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
                className={todo.edited ? (style.hidden) : (style.checkButtonActive)}
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
                (<div
                    className={todo.completed ? style.titleCompleted : style.titleActive}
                    onDoubleClick={editTodoHandler}>{todo.title}
                </div>)}


            <button
                className={todo.edited? style.hidden : style.deleteButton}
                onClick={() => deleteTodoTodo(todo.id)}
                type="submit"
            >&times;</button>
        </li>
    )
}

Todo.propTypes = {
    todo: PropTypes.objectOf(PropTypes.any),
    deleteTodoTodo: PropTypes.func,
    checkTodoTodo: PropTypes.func,
    editTitleTodo: PropTypes.func,
    editTodoTodo: PropTypes.func,
    click: PropTypes.bool,
    clickEvent: PropTypes.objectOf(PropTypes.any)
}

const mapStateToProps = (state) => ({
        click: makeGetClick(state),
        clickEvent: makeGetClickEvent(state)
    })

const mapDispatchToProps = {
    deleteTodoTodo: id => deleteTodo(id),
    checkTodoTodo: id => checkTodo(id),
    editTitleTodo: newTitle => editTitle(newTitle),
    editTodoTodo: id => editTodo(id),
}

export default connect(mapStateToProps, mapDispatchToProps) (Todo)