import { configureStore } from '@reduxjs/toolkit'
import todosReducer from "./reducer/todosReducer/todosSlicer";
import {loadState, saveState} from "./localStorage";

const reducer = {
    todosReducer
}
const preloadedState = loadState();

export const store = configureStore({
    reducer,
    preloadedState,
})

store.subscribe(() => {
    saveState({
        todosReducer: store.getState().todosReducer
    });
});

