import {
    ADD_TODO,
    DELETE_TODO,
    CHECK_TODO,
    EDIT_TODO,
    CHECK_ALL_TODOS,
    CLEAR_COMPLETED,
    FILTERED_TODOS,
    GET_CLICK,
    CHANGE_FILTER, EDIT_TITLE

} from "./types";

export const addTodo = (todo) => ({
        type: ADD_TODO,
        payload: todo
    })

export const deleteTodo = (id) => ({
        type: DELETE_TODO,
        payload: id
    })

export const checkTodo = (id) => ({
        type: CHECK_TODO,
        payload: id
    })

export const editTitle = (newTitle) => ({
        type: EDIT_TITLE,
        payload: newTitle
    })

export const editTodo = (todo) => ({
        type: EDIT_TODO,
        payload: todo
    })

export const checkAllTodos = () => ({
        type: CHECK_ALL_TODOS
    })

export const clearCompleted = () => ({
        type: CLEAR_COMPLETED
    })

export const changeFilter = (filter) => ({
        type: CHANGE_FILTER,
        payload: filter
    })

export const filteredTodos = () => ({
        type: FILTERED_TODOS
    })

export const getClick = (event) => ({
        type: GET_CLICK,
        payload: event
    })