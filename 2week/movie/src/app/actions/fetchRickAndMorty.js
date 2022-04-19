export const fetchRickAndMorty=({currentPage=1}={})=>dispatch=>{
    fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
      .then(res => res.json())
      .then(
        (result) => {
            dispatch({
                type: 'rickAndMorty/set',
                payload: result.results
            })
        },
      )
}