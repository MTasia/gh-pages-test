import React from "react";
import {connect} from "react-redux";
import Header from "./components/todosComponents/Header/Header";
import Todos from "./components/todosComponents/Todos/Todos";
import InputTodo from "./components/todosComponents/InputTodo/InputTodo";
import Filters from "./components/todosComponents/Filters/Filters";
import Footer from "./components/todosComponents/Footer/Footer";

const App = () => (
        <div className='body' >
            <div className='wrapper'>
                <Header/>
                <InputTodo/>
                <Todos/>
                <Filters/>
                <Footer/>
            </div>
        </div>
    )

export default connect(null, null) (App)
