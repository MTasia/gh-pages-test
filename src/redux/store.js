import { configureStore } from '@reduxjs/toolkit'
import todosReducer from "./todosReducer/todosSlicer";

export const store = configureStore({
    reducer: {
        todosReducer
    }
})



