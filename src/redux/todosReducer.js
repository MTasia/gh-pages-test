import {
    ADD_TODO, CHANGE_FILTER,
    CHECK_ALL_TODOS,
    CHECK_TODO,
    CLEAR_COMPLETED,
    DELETE_TODO, EDIT_TITLE,
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
    clickEvent: null,
    editTodoTitle: ''
}

export const todosReducer = (state = initState, action) => {

    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat(action.payload),
                itemsLeft: state.itemsLeft + 1
            }

        case DELETE_TODO:
            const newListWithDeletedTodo = state.todos.filter((todo) => todo.id !== action.payload);
            if (state.itemsLeft > 0) {
                return {
                    ...state,
                    todos: newListWithDeletedTodo,
                    itemsLeft: state.itemsLeft - 1
                }
            }
            return {
                ...state,
                todos: newListWithDeletedTodo
            }

        case CHECK_TODO:
            let newItemsLeft = state.itemsLeft;
            const newListWithCheckTodo = state.todos.map((todo) => todo.id === action.payload ?
                ((todo.completed ? newItemsLeft += 1 : newItemsLeft -= 1), {...todo, completed: !todo.completed}) :
                {...todo});

            return {
                ...state,
                todos: newListWithCheckTodo,
                itemsLeft: newItemsLeft
            }

        case CLEAR_COMPLETED:
            const newListWithoutCompleted = state.todos.filter(todo => !todo.completed);
            return {
                ...state,
                todos: newListWithoutCompleted,
                itemsLeft: newListWithoutCompleted.length
            }

        case CHECK_ALL_TODOS:
            const isFirstTodoCompleted = state.todos[0].completed
            if (isFirstTodoCompleted) {
                const newListCheckAllTodos = state.todos.map(todo => ({...todo, completed: false}))
                return {
                    ...state,
                    todos: newListCheckAllTodos,
                    itemsLeft: newListCheckAllTodos.length
                }
            } 
                const newListCheckAllTodos = state.todos.map(todo => ({...todo, completed: true}))
                return {
                    ...state,
                    todos: newListCheckAllTodos,
                    itemsLeft: 0
                }
            

        case CHANGE_FILTER:
            return {
                ...state,
                currentFilter: action.payload
            }

        case FILTERED_TODOS:
            if (state.currentFilter === filters.all) {
                const newFilteredList = state.todos.map(todo => ({...todo, visibility: true}))
                return {
                    ...state,
                    todos: newFilteredList
                }
            }
            if (state.currentFilter === filters.active) {
                const newFilteredList = state.todos.map(todo => todo.completed ? ({...todo, visibility: false}) : ({...todo, visibility: true}))
                return {
                    ...state,
                    todos: newFilteredList
                }
            }
            if (state.currentFilter === filters.completed) {
                const newFilteredList = state.todos.map(todo => todo.completed ? ({...todo, visibility: true}): ({...todo, visibility: false}))
                return {
                    ...state,
                    todos: newFilteredList
                }
            }
            return state

        case EDIT_TITLE:
            return {
                ...state,
                editTodoTitle: action.payload
            }

        case EDIT_TODO:
            if (!action.payload.edited) {
                const newListWithEditedTodo = state.todos.map((todo) => todo.id === action.payload.id ? {...todo, edited: true} : {...todo});
                return {
                    ...state,
                    todos: newListWithEditedTodo
                }
            }
            
                const newListWithEditedTodo = state.todos.map((todo) => todo.id === action.payload.id ? {...todo, edited: false, title: state.editTodoTitle} : {...todo});
                return {
                    ...state,
                    todos: newListWithEditedTodo
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