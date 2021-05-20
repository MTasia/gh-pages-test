import React from "react";
import Header from "./components/Header/Header";
import Todos from "./components/Todos/Todos";
import InputTodo from "./components/InputTodo/InputTodo";
import Filters from "./components/Filters/Filters";
import Footer from "./components/Footer/Footer";
import {connect} from "react-redux";
import {getClick} from "./redux/actions";

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

const mapDispatchToProps = {
    getClick: event => getClick(event)
}

export default connect(null, mapDispatchToProps) (App)
