import {compose, createStore} from "redux";
import {todosReducer} from "./todosReducer";

export const store = createStore(
    todosReducer,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)