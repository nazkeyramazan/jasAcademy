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