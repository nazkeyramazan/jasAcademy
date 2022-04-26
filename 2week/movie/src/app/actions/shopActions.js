import axios from 'axios';
export const SET_PRODUCTS = 'shop/setProducts'
export const SET_ONE_PRODUCT = 'shop/setOneProduct'
export const ADD_TO_BASKET = 'shop/addToBasket'
export const REMOVE_FROM_BASKET = 'shop/removeFromBasket'
export const CLEAR_BASKET = 'shop/clearBasket'
export const ADD_PRODUCT_TO_REDUX_STORE = 'shop/createNewProuduct'

export const SET_LOADING = 'shop/setLoading'
export const OPEN_MODAL = 'shop/openOrderModal'
export const CLOSE_MODAL = 'shop/closeOrderModal'


export const fetchProducts = ()=> dispatch =>{
    axios.get('https://fakestoreapi.com/products?limit=20')
    .then(res=>{
        dispatch({
            type: SET_PRODUCTS,
            payload: res.data
        })
        dispatch({
            type: SET_LOADING,
            payload: false
        })
    }
    )
    
}
export const fetchOneProduct = ()=> dispatch =>{
    axios.get('https://fakestoreapi.com/products/21')
    .then(res=>res.json())
    .then(res=>{
        dispatch({
            type: SET_ONE_PRODUCT,
            payload: res.data
        })
    }
    )
    
}
export const addProductToReduxStore = (product) =>dispatch=>{
    dispatch({
        type: ADD_PRODUCT_TO_REDUX_STORE,
        payload: product,
    })
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