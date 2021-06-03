import {combineReducers, compose, createStore} from "redux";
import {todosReducer} from "./todosReducer/todosReducer";
import {loadState} from "./localStorage";

const rootReducer = combineReducers({
    todosReducer
})

const persistedState = loadState()

export const store = createStore(
    rootReducer,
    persistedState,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)


