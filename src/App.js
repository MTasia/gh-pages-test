import React from "react";
import {connect} from "react-redux";
import {getClick} from "./redux/actions";
import PropTypes from "prop-types";
import Header from "./components/Header/Header";
import Todos from "./components/Todos/Todos";
import InputTodo from "./components/InputTodo/InputTodo";
import Filters from "./components/Filters/Filters";
import Footer from "./components/Footer/Footer";

const App = ({getClick}) => {

    return (
        <div className='body' onClick={(event) => getClick(event)}>
            <div className='wrapper'>
                <Header/>
                <InputTodo/>
                <Todos/>
                <Filters/>
                <Footer/>
            </div>
        </div>
    );
}

App.propTypes = {
    getClick: PropTypes.func
}

const mapDispatchToProps = {
    getClick: event => getClick(event)
}

export default connect(null, mapDispatchToProps) (App)
