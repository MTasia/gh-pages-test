import React, {useState} from 'react'
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {changeFilter, filteredTodos} from "../../redux/actions";
import style from "./Filtres.module.css";

const FiltersNav = ({filteredTodosNav, changeFilterNav}) => {

    const [allSelected, setAllSelected] = useState(true)
    const [activeSelected, setActiveSelected] = useState(false)
    const [completedSelected, setCompletedSelected] = useState(false)

    const setAllHandler = () => {
        setAllSelected(true);
        setActiveSelected(false);
        setCompletedSelected(false);
        changeFilterNav('all');
        filteredTodosNav();
    }

    const setActiveHandler = () => {
        setAllSelected(false);
        setActiveSelected(true);
        setCompletedSelected(false);
        changeFilterNav('active');
        filteredTodosNav();
    }

    const setCompletedHandler = () => {
        setAllSelected(false);
        setActiveSelected(false);
        setCompletedSelected(true);
        changeFilterNav('completed');
        filteredTodosNav();
    }

    return (
        <nav className={style.filters}>
            <div className={style.item}>
                <a className={allSelected? style.active : style.none} onClick={setAllHandler} href='#all'>All</a>
            </div>
            <div className={style.item}>
                <a className={activeSelected? style.active : style.none} onClick={setActiveHandler} href='#active'>Active</a>
            </div>
            <div className={style.item}>
                <a className={completedSelected? style.active : style.none} onClick={setCompletedHandler} href='#completed'>Completed</a>
            </div>
        </nav>
    )
}

FiltersNav.propTypes = {
    filteredTodosNav: PropTypes.func,
    changeFilterNav: PropTypes.func
}

const mapDispatchToProps = {
    filteredTodosNav: () => filteredTodos(),
    changeFilterNav: filter => changeFilter(filter)
}

export default connect(null, mapDispatchToProps) (FiltersNav)