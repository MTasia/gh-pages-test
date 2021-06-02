import React, {useState} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {addTodo, checkAllTodos} from "../../redux/todosReducer/actions";
import style from './InputTodo.module.css'

const InputTodo = ({todos, addTodoInput, checkAllTodosInput}) => {

    const [userInput, setUserInput] = useState('')

    const changeInputHandler = (event) => {
        setUserInput(event.currentTarget.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (userInput.trim()) {
            const newTodo = {
                title: userInput,
                id: Date.now().toString(),
                completed: false,
                edited: false,
                visibility: true
            }
            addTodoInput(newTodo);
            setUserInput('')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <label
                className={todos.length > 0 ? style.label : style.hidden}
                onClick={() => checkAllTodosInput()}
            >❯</label>
            <input
                type="text"
                placeholder="What needs to be done?"
                className={style.input}
                value={userInput}
                onChange={changeInputHandler}
            />
        </form>
    )
}

InputTodo.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    addTodoInput: PropTypes.func,
    checkAllTodosInput: PropTypes.func
}

const mapStateToProps = (state) => ({
        todos: state.todosReducer.todos
    })

const mapDispatchToProps = {
    addTodoInput: todo => addTodo(todo),
    checkAllTodosInput: () => checkAllTodos()
};

export default connect(mapStateToProps, mapDispatchToProps) (InputTodo)