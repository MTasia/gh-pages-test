import {combineReducers, compose, createStore} from "redux";
import {todosReducer} from "./todosReducer/todosReducer";

const rootReducer = combineReducers({
    todosReducer
})

export const store = createStore(
    rootReducer,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)