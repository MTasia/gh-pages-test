import React from "react";
import {connect} from "react-redux";
import Todo from "../Todo/Todo";
import style from "./Todos.module.css";

const Todos = ({todos}) => {
    return (
        <div className={style.list}>
            {todos.map((elem) => <Todo todo={elem} key={elem.id} />)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, null) (Todos)