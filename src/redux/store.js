import { configureStore } from '@reduxjs/toolkit'
import todosReducer from "./reducer/todosReducer/todosSlicer";
import {loadState, saveState} from "./localStorage";

const persistedState = loadState();
export const store = configureStore({
    reducer: {
        todosReducer,
        persistedState
    }
})

store.subscribe(() => {
    saveState({
        todosReducer: store.getState().todosReducer
    });
});
