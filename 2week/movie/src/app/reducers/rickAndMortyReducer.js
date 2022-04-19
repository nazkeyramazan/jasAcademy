
const inititalState = {
    rickAndMorty: [],
    currentPage: 1
}

export const rickAndMortyReducer = function (state = inititalState, action) {
    const newState = { ...state }
    switch (action.type) {  
        case 'rickAndMorty/set':
            newState.rickAndMorty = action.payload
            break
        case 'rickAndMorty/setCurrentPage':
            newState.currentPage = action.payload
            break
        default:
            return state
    }
    return newState
}