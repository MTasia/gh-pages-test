import {
    ADD_TODO,
    DELETE_TODO,
    CHECK_TODO,
    EDIT_TODO,
    CHECK_ALL_TODOS,
    CLEAR_COMPLETED,
    FILTERED_TODOS,
    GET_CLICK,
    CHANGE_FILTER

} from "./types";

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const checkTodo = (id) => {
    return {
        type: CHECK_TODO,
        payload: id
    }
}

export const editTodo = (todo) => {
    return {
        type: EDIT_TODO,
        payload: todo
    }
}

export const checkAllTodos = () => {
    return {
        type: CHECK_ALL_TODOS
    }
}

export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED
    }
}

export const changeFilter = (filter) => {
    return {
        type: CHANGE_FILTER,
        payload: filter
    }
}

export const filteredTodos = (filter) => {
    return {
        type: FILTERED_TODOS
    }
}

export const getClick = (event) => {
    return {
        type: GET_CLICK,
        payload: event
    }
}