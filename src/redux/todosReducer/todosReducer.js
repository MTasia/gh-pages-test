import {
    ADD_TODO, CHANGE_FILTER,
    CHECK_ALL_TODOS, CHECK_TODO,
    CLEAR_COMPLETED, DELETE_TODO, EDIT_TITLE, EDIT_TODO,
    GET_CLICK
} from "./types";

import {FILTER_ALL} from "./filtersConst";

const defaultState = {
    todos: [],
    currentFilter: FILTER_ALL,
    click: false,
    clickEvent: null,
    editTodoTitle: ''
}

export const todosReducer = (state = defaultState, action) => {

    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat(action.payload)
            }

        case DELETE_TODO:
            const newListWithDeletedTodo = state.todos.filter((todo) => todo.id !== action.payload);
            return {
                ...state,
                todos: newListWithDeletedTodo
            }

        case CHECK_TODO:
            const newListWithCheckTodo = state.todos.map((todo) => {
                if (todo.id === action.payload && todo.completed) {
                    return {...todo, completed: !todo.completed}
                }
                if (todo.id === action.payload && !todo.completed) {
                    return {...todo, completed: !todo.completed}
                }
                return {...todo}
            })
            return {
                ...state,
                todos: newListWithCheckTodo
            }

        case EDIT_TITLE:
            return {
                ...state,
                editTodoTitle: action.payload
            }

        case EDIT_TODO:
            const {id, edited} = action.payload
            if (!edited) {
                const newListWithEditedTodo = state.todos.map((todo) => todo.id === id ? {
                    ...todo,
                    edited: true
                } : {...todo});
                return {
                    ...state,
                    todos: newListWithEditedTodo
                }
            }

            const newListWithEditedTodo = state.todos.map((todo) => todo.id === id ? {
                ...todo,
                edited: false,
                title: state.editTodoTitle
            } : {...todo});
            return {
                ...state,
                todos: newListWithEditedTodo
            }

        case CLEAR_COMPLETED:
            const newListWithoutCompleted = state.todos.filter(todo => !todo.completed);
            return {
                ...state,
                todos: newListWithoutCompleted
            }

        case CHECK_ALL_TODOS:
            const isFirstTodoCompleted = state.todos[0].completed
            if (isFirstTodoCompleted) {
                const newListCheckAllTodos = state.todos.map(todo => ({...todo, completed: false}))
                return {
                    ...state,
                    todos: newListCheckAllTodos
                }
            }
            const newListCheckAllTodos = state.todos.map(todo => ({...todo, completed: true}))
            return {
                ...state,
                todos: newListCheckAllTodos
            }


        case CHANGE_FILTER:
            return {
                ...state,
                currentFilter: action.payload
            }

        case GET_CLICK:
            return {
                ...state,
                click: true,
                clickEvent: action.payload
            }

        default:
            return state
    }
}