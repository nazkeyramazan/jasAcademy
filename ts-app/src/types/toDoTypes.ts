export enum ToDoActionTypes {
    TODO_FETCH = 'TODO_FETCH',
    TODO_FETCH_SUCCESS = 'TODO_FETCH_SUCCESS',
    TODO_FETCH_ERROR = 'TODO_FETCH_ERROR',
    TODO_OVERDUE_LIST = 'TODO_OVERDUE_LIST',
    TODO_TODAY_LIST = 'TODO_TODAY_LIST',
    TODO_TOMORROW_LIST = 'TODO_TOMORROW_LIST'
}
export type ToDoFetched = {
    items: ToDoTypes[]
    stage: string
    stageName: string
}
export type ToDoTypes = {
    clientId?: string
    clientName?: string
    createTimestamp?: string
    plannedEndTime: string
    plannedStartTime: string
    taskId: string
    taskTypeId: string
    taskTypeName: string
}
export type ToDoReducerInitState = {
    toDos: ToDoFetched[]
    overdue: ToDoTypes[]
    today: ToDoTypes[]
    tomorrow: ToDoTypes[]
    loading:boolean
    error?: string
}
export type ToDoFetch = {
    type: ToDoActionTypes.TODO_FETCH
}
export type ToDoFetchSuccess = {
    type: ToDoActionTypes.TODO_FETCH_SUCCESS,
    payload: ToDoFetched[]
}
export type ToDoFetchError = {
    type: ToDoActionTypes.TODO_FETCH_ERROR,
    payload: string
}
type ToDoOverdue = {
    type: ToDoActionTypes.TODO_OVERDUE_LIST,
}
type ToDoToday = {
    type: ToDoActionTypes.TODO_TODAY_LIST,
}
type ToDoTomorrow = {
    type: ToDoActionTypes.TODO_TOMORROW_LIST,
}
export type ToDoActions = ToDoFetch | ToDoFetchSuccess | ToDoFetchError | ToDoOverdue | ToDoToday | ToDoTomorrow