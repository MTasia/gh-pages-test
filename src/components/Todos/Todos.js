import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Todo from "../Todo/Todo";
import style from "./Todos.module.css";

const Todos = ({todos}) => (
        <div className={style.list}>
            {todos.map((elem) => <Todo todo={elem} key={elem.id} />)}
        </div>
    )

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = (state) => ({
        todos: state.todos
    })

export default connect(mapStateToProps, null) (Todos)