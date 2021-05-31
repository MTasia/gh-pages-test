import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import FiltersNav from "./FiltersNav";
import {clearCompleted} from "../../redux/actions";
import style from './Filtres.module.css'

const Filters = ({todos, itemsLeft, clearCompleted}) => {

    return (
        <div className={todos.length === 0 ? style.hidden : style.none}>
            <div className={style.filtersWrapper}>
                <div className={style.itemLeft}>{itemsLeft} items left</div>
                <FiltersNav />
                <div
                    className={style.clearCompleted}
                    onClick={() => clearCompleted()}
                >Clear completed</div>
            </div>
            <div className={style.filtersAfter1}/>
            <div className={style.filtersAfter2}/>
        </div>
    )
}

Filters.propTypes = {
    todos: PropTypes.array,
    itemsLeft: PropTypes.number,
    clearCompleted: PropTypes.func
}

const mapStateToProps = (state)  => {
    return {
        todos: state.todos,
        itemsLeft: state.itemsLeft
    }
}

const mapDispatchToProps = {
    clearCompleted
}

export default connect(mapStateToProps, mapDispatchToProps) (Filters)