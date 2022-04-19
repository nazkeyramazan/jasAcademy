

const inititalState = {
    movies: [],
    sortBy: 'popularity',
    query: '',
    currentPage: 1,
    totalPage: 500
}

export const moviesReducer = function (state = inititalState, action) {
    const newState = { ...state }
    switch (action.type) {
        case 'movies/set':
            newState.movies = action.payload
            break;
        case 'movies/setSortBy':
            newState.sortBy = action.payload
            break
        case 'movies/setQuery':
            newState.query = action.payload
            break        
        case 'movies/setCurrentPage':
            newState.currentPage = action.payload
            break
        case 'movies/setTotalPage':
            newState.totalPage = action.payload
            break
        default:
            return state
    }
    return newState
}