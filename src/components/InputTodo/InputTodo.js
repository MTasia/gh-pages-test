import React, {useState} from "react";
import {connect} from "react-redux";
import {addTodo, checkAllTodos} from "../../redux/actions";
import style from './InputTodo.module.css'

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