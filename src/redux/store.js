import { configureStore } from '@reduxjs/toolkit'
import todosReducer from "./reducer/todosReducer/todosSlicer";
// import {loadState} from "./localStorage";

// const persistedState = loadState();
export const store = configureStore({
    reducer: {
        todosReducer,
        // persistedState
    }
})



