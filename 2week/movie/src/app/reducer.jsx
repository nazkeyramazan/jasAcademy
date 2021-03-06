
const inititalState = {
    value : 5,
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    movies: [],
    rickAndMorty: [],
    counter : 0,
}

export const reducer = function (state = inititalState, action) {
    const newState = { ...state }
    switch (action.type) {
        case 'counter/increase':
            newState.counter = state.counter + 1
            break
        case 'counter/decrease':
            newState.counter = state.counter - 1
            break    
        case 'rickAndMorty/set':
            newState.rickAndMorty = action.payload
            break
        case 'movies/set':
            newState.movies = action.payload
            break;
        case 'todos/add':
            newState.todos = [...state.todos, action.payload]
            break;
        case 'todos/delete':
            newState.todos = state.todos.filter(todo => todo.id !== action.payload)
            break;
        case 'todos/doneChange':
            newState.todos =  state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            checked: !todo.checked
                        }
                    }
                    return todo
                })
            break;
        default:
            return state
    }
    localStorage.setItem('todos', JSON.stringify(newState.todos))
    return newState
}