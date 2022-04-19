

export const fetchMovies = ({query, currentPage = 1, sortBy = 'popularity'}={})=> dispatch=>{
    let method = 'discover'
    if (query && query.length > 0) {
        method = 'search'
    }
    fetch(`https://api.themoviedb.org/3/${method}/movie?sort_by=${sortBy}.desc&api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&include_adult=false&include_video=true&page=${currentPage}&with_watch_monetization_types=flatrate&query=${query}`)
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: 'movies/set',
                payload: data.results
            })
            dispatch({
                type: 'movies/setTotalPage', payload: Math.min(data.total_pages, 500)
            })
        })
}

              