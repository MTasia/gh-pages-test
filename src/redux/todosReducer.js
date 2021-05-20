import {
    ADD_TODO, CHANGE_FILTER,
    CHECK_ALL_TODOS,
    CHECK_TODO,
    CLEAR_COMPLETED,
    DELETE_TODO,
    EDIT_TODO,
    FILTERED_TODOS,
    GET_CLICK
} from "./types";

const filters = {
    all: 'all',
    active: 'active',
    completed: 'completed'
}

const initState = {
    todos: [],
    itemsLeft: 0,
    currentFilter: filters.all,
    click: false,
    clickEvent: null
}

export const todosReducer = (state = initState, action) => {

    switch (action.type) {
        case ADD_TODO:
            state.itemsLeft++;
            return {...state, todos: state.todos.concat(action.payload)}

        case DELETE_TODO:
            const newListWithDeletedTodo = state.todos.filter((todo) => todo.id !== action.payload);
            if (state.itemsLeft > 0) {
                state.itemsLeft--;
            }
            return {
                ...state,
                todos: newListWithDeletedTodo
            }

        case CHECK_TODO:
            let newListWithCheckTodo = state.todos.map((todo) => todo.id === action.payload ?
                ((todo.completed ? state.itemsLeft++ : state.itemsLeft--), {...todo, completed: !todo.completed}) :
                {...todo});

            return {
                ...state,
                todos: newListWithCheckTodo
            }

        case CLEAR_COMPLETED:
            let newListWithoutCompleted = state.todos.filter(todo => !todo.completed);
            state.itemsLeft = newListWithoutCompleted.length;
            return {
                ...state,
                todos: newListWithoutCompleted
            }

        case CHECK_ALL_TODOS:
            const isFirstTodoCompleted = state.todos[0].completed
            if (isFirstTodoCompleted) {
                let newListCheckAllTodos = state.todos.map(todo => ({...todo, completed: false}))
                state.itemsLeft = newListCheckAllTodos.length;
                return {...state, todos: newListCheckAllTodos}
            } else {
                let newListCheckAllTodos = state.todos.map(todo => ({...todo, completed: true}))
                state.itemsLeft = 0;
                return {...state, todos: newListCheckAllTodos}
            }

        case CHANGE_FILTER:
            state.currentFilter = action.payload;
            return state

        case FILTERED_TODOS:
            if (state.currentFilter === filters.all) {
                let newFilteredList = state.todos.map(todo => ({...todo, visibility: true}))
                return {
                    ...state,
                    todos: newFilteredList
                }
            }
            else if (state.currentFilter === filters.active) {
                let newFilteredList = state.todos.map(todo => todo.completed ? ({...todo, visibility: false}) : ({...todo, visibility: true}))
                return {
                    ...state,
                    todos: newFilteredList
                }
            }
            else if (state.currentFilter === filters.completed) {
                let newFilteredList = state.todos.map(todo => todo.completed ? ({...todo, visibility: true}): ({...todo, visibility: false}))
                return {
                    ...state,
                    todos: newFilteredList
                }
            }
            return state

        case EDIT_TODO:
            if (action.payload.edited) {
                let newListWithEditedTodo = state.todos.map((todo) => todo.id === action.payload.id ? {...todo, edited: true} : {...todo});
                return {
                    ...state,
                    todos: newListWithEditedTodo
                }
            }
            else {
                let newListWithEditedTodo = state.todos.map((todo) => todo.id === action.payload.id ? {...todo, edited: false} : {...todo});
                return {
                    ...state,
                    todos: newListWithEditedTodo
                }
            }

        case GET_CLICK:
            state.click = true
            state.clickEvent = action.payload
            return state

        default:
        return state
    }
}