import axios from 'axios';
export const SET_PRODUCTS = 'shop/setProducts'
export const ADD_TO_BASKET = 'shop/addToBasket'
export const REMOVE_FROM_BASKET = 'shop/removeFromBasket'
export const CLEAR_BASKET = 'shop/clearBasket'
export const fetchProducts = ()=> dispatch =>{
    axios.get('https://fakestoreapi.com/products?limit=4')
    .then(res=>{
        dispatch({
            type: SET_PRODUCTS,
            payload: res.data
        })
    }
    )
    
}

export const addToBasket = (product) => (dispatch) => {
    dispatch({
        type: ADD_TO_BASKET,
        payload: product,
    })
}

export const removeFromBasket = (product)  => dispatch =>{
    dispatch({
        type: REMOVE_FROM_BASKET,
        payload: product
    })
}

export const clearBasket = ()  => dispatch =>{
    dispatch({
        type: CLEAR_BASKET,
    })
}