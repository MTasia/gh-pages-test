import React, {useState} from 'react'
import {connect} from "react-redux";
import PropTypes, {bool} from "prop-types";
import {changeFilter} from "../../../redux/reducer/todosReducer/todosSlicer";
import style from "./Filtres.module.css";
import {makeGetFilterStatus} from "../../../redux/selectors/todosSelector";

const FiltersNav = ({filterStatus, changeFilterNav}) => {

    const [allSelected, setAllSelected] = useState(filterStatus.all)
    const [activeSelected, setActiveSelected] = useState(filterStatus.active)
    const [completedSelected, setCompletedSelected] = useState(filterStatus.completed)

    const setAllHandler = () => {
        setAllSelected(true);
        setActiveSelected(false);
        setCompletedSelected(false);
        changeFilterNav('all');
    }

    const setActiveHandler = () => {
        setAllSelected(false);
        setActiveSelected(true);
        setCompletedSelected(false);
        changeFilterNav('active');
    }

    const setCompletedHandler = () => {
        setAllSelected(false);
        setActiveSelected(false);
        setCompletedSelected(true);
        changeFilterNav('completed');
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
    filterStatus: PropTypes.objectOf(bool),
    changeFilterNav: PropTypes.func
}

const makeMapStateToProps = () => {
    const getFilterStatus = makeGetFilterStatus()
    const mapStateToProps = (state) => ({
        filterStatus: getFilterStatus(state)
    })
    return mapStateToProps
}

const mapDispatchToProps = {
    changeFilterNav: filter => changeFilter(filter)
}

export default connect(makeMapStateToProps, mapDispatchToProps) (FiltersNav)
