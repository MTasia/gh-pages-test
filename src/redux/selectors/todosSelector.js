import {createSelector} from "reselect";
import {FILTER_ACTIVE, FILTER_ALL, FILTER_COMPLETED} from "../todosReducer/filtersConst";

const getTodos = (state) => state.todosReducer.todos

const getFilter = (state) => state.todosReducer.currentFilter

export const makeGetClick = (state) => state.todosReducer.click

export const makeGetClickEvent = (state) => state.todosReducer.clickEvent

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