import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Todo from "../Todo/Todo";
import style from "./Todos.module.css";
import {makeGetVisibleTodos} from "../../../redux/selectors/todosSelector";

const Todos = ({todos}) => (
    <div className={style.list}>
        {todos.map((elem) => <Todo todo={elem} key={elem.id}/>)}
    </div>
)

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object)
}

const makeMapStateToProps = () => {
    const getVisibleTodos = makeGetVisibleTodos()
    const mapStateToProps = (state) => ({
            todos: getVisibleTodos(state)
    })
    return mapStateToProps
}

export default connect(makeMapStateToProps, null)(Todos)