import {createSelector} from "reselect";
import {FILTER_ACTIVE, FILTER_ALL, FILTER_COMPLETED} from "../reducer/todosReducer/filtersConst";

const getTodos = (state) => state.todosReducer.todos

const getFilter = (state) => state.todosReducer.currentFilter

export const makeGetItemsLeft = () => createSelector(
    [getTodos],
    (todos) => {
        let itemsLeft = 0
        todos.map((todo) => {
           if (!todo.completed) {
               itemsLeft += 1
           }
           return itemsLeft
        })
        return itemsLeft
    }
)

export const makeGetVisibleTodos = () => createSelector(
        [getFilter, getTodos],
        (filter, todos) => {
            if (filter === FILTER_ALL) {
                return todos
            }
            if (filter === FILTER_ACTIVE) {
                return todos.filter((todo) => !todo.completed)
            }
            if (filter === FILTER_COMPLETED) {
                return todos.filter((todo) => todo.completed)
            }
            return todos
        })

export const makeGetFilterStatus = () => createSelector(
    [getFilter],
    (filter) => {
        let filterStatus = {}
        if (filter === FILTER_ALL) {
            filterStatus = {
                all: true,
                active: false,
                completed: false
            }
        }
        if (filter === FILTER_ACTIVE) {
            filterStatus = {
                all: false,
                active: true,
                completed: false
            }
        }
        if (filter === FILTER_COMPLETED) {
            filterStatus = {
                all: false,
                active: false,
                completed: true
            }
        }
        return filterStatus
    }
)

export const makeGetAllTodos = () => createSelector(
    [getTodos],
    (todos) => (todos)
)

