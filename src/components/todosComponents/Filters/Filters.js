import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import FiltersNav from "./FiltersNav";
import {clearCompleted} from "../../../redux/reducer/todosReducer/todosSlicer";
import style from './Filtres.module.css'
import {makeGetItemsLeft, makeGetAllTodos} from "../../../redux/selectors/todosSelector";

const Filters = ({todos, itemsLeft, clearCompletedFilters}) => (
        <div className={todos.length === 0 ? style.hidden : style.none}>
            <div className={style.filtersWrapper}>
                <div className={style.itemLeft}>{itemsLeft} items left</div>
                <FiltersNav />
                <div
                    className={style.clearCompleted}
                    onClick={clearCompletedFilters}
                >Clear completed</div>
            </div>
            <div className={style.filtersAfter1}/>
            <div className={style.filtersAfter2}/>
        </div>
    )

Filters.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    itemsLeft: PropTypes.number,
    clearCompletedFilters: PropTypes.func
}

const makeMapStateToProps = () => {
    const getItemsLeft = makeGetItemsLeft()
    const getAllTodos = makeGetAllTodos()
    const mapStateToProps = (state) => ({
        todos: getAllTodos(state),
        itemsLeft: getItemsLeft(state)
    })
    return mapStateToProps
}

const mapDispatchToProps = {
    clearCompletedFilters: clearCompleted
}

export default connect(makeMapStateToProps, mapDispatchToProps) (Filters)