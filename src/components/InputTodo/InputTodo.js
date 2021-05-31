import React, {useState} from "react";
import {connect} from "react-redux";
import {addTodo, checkAllTodos} from "../../redux/actions";
import style from './InputTodo.module.css'
import PropTypes from "prop-types";

const InputTodo = ({todos, addTodo, checkAllTodos}) => {

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
            addTodo(newTodo);
            setUserInput('')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <label
                className={todos.length > 0 ? style.label : style.hidden}
                onClick={() => checkAllTodos()}
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
    todos: PropTypes.array,
    addTodo: PropTypes.func,
    checkAllTodos: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = {
    addTodo: todo => addTodo(todo),
    checkAllTodos: () => checkAllTodos()
};

export default connect(mapStateToProps, mapDispatchToProps) (InputTodo)