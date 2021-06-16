import {createSlice} from "@reduxjs/toolkit";
import {FILTER_ALL} from "./filtersConst";

const defaultState = {
    todos: [],
    currentFilter: FILTER_ALL,
    editTodoTitle: ''
}

export const todosSlicer = createSlice({
    name: 'todos',
    initialState: defaultState,
    reducers: {
        addTodo(state, action) {
            return {
                ...state,
                todos: state.todos.concat(action.payload)
            }
        },
        deleteTodo(state, action) {
            const newListWithDeletedTodo = state.todos.filter((todo) => todo.id !== action.payload);
            return {
                ...state,
                todos: newListWithDeletedTodo
            }
        },
        checkTodo(state, action) {
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
        },
        clearCompleted(state){
            const newListWithoutCompleted = state.todos.filter(todo => !todo.completed);
            return {
                ...state,
                todos: newListWithoutCompleted
            }
        },
        editTitle(state, action) {
            return {
                ...state,
                editTodoTitle: action.payload
            }
        },
        editTodo(state, action) {
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
        },
        checkAllTodos(state) {
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
        },
        changeFilter(state, action) {
            return {
                ...state,
                currentFilter: action.payload
            }
        }
    },
})

const { actions, reducer } = todosSlicer;

export const { addTodo, deleteTodo, checkTodo, clearCompleted, editTitle, editTodo, checkAllTodos, changeFilter } = actions

export default reducer