export const createTodo = function(todoItem){
    return {
        type: 'todos/add',
        todoItem
    }
}

export const deleteTodo = function(id){
    return {
        type: 'todos/delete',
        id
    }
}

export const doneTodo = function(id){
    return {
        type: 'todos/doneChange',
        id
    }
}

export const setMovies = function(movies){
    return {
        type: 'movies/set',
        movies
    }
}

export const setRickAndMorty = function(data){
    return {
        type: 'rickAndMorty/set',
        data
    }
}

// export const 