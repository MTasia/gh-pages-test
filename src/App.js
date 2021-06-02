import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getClick} from "./redux/todosReducer/actions";
import Header from "./components/Header/Header";
import Todos from "./components/Todos/Todos";
import InputTodo from "./components/InputTodo/InputTodo";
import Filters from "./components/Filters/Filters";
import Footer from "./components/Footer/Footer";

const App = ({getClickApp}) => (
        <div className='body' onClick={(event) => getClickApp(event)}>
            <div className='wrapper'>
                <Header/>
                <InputTodo/>
                <Todos/>
                <Filters/>
                <Footer/>
            </div>
        </div>
    )

App.propTypes = {
    getClickApp: PropTypes.func
}

const mapDispatchToProps = {
    getClickApp: event => getClick(event)
}

export default connect(null, mapDispatchToProps) (App)
