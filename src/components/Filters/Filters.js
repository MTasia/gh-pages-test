import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import FiltersNav from "./FiltersNav";
import {clearCompleted} from "../../redux/todosReducer/actions";
import style from './Filtres.module.css'

const Filters = ({todos, itemsLeft, clearCompletedFilters}) => (
        <div className={todos.length === 0 ? style.hidden : style.none}>
            <div className={style.filtersWrapper}>
                <div className={style.itemLeft}>{itemsLeft} items left</div>
                <FiltersNav />
                <div
                    className={style.clearCompleted}
                    onClick={() => clearCompletedFilters()}
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

const mapStateToProps = (state)  => ({
        todos: state.todosReducer.todos,
        itemsLeft: state.todosReducer.itemsLeft
    })

const mapDispatchToProps = {
    clearCompletedFilters: () => clearCompleted()
}

export default connect(mapStateToProps, mapDispatchToProps) (Filters)