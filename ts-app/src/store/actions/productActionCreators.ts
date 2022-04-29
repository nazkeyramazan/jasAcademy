import axios from 'axios'
import {Dispatch} from 'redux'
import {Product, ProductAction, ProductActionTypes} from '../../types/productTypes'


export const fetchProducts = () => (dispatch: Dispatch<ProductAction>) => {
    dispatch({ type: ProductActionTypes.PRODUCT_FETCH })
    axios.get<Product[]>('https://fakestoreapi.com/products').then((res) => {
        dispatch({ type: ProductActionTypes.PRODUCT_FETCH_SUCCESS, payload: res.data })
    }).catch(() => {
        dispatch({ type: ProductActionTypes.PRODUCT_FETCH_ERROR, payload: 'Ошибка при загрузке продуктов' })
    })
}

export const addToBasket = (product:Product) => (dispatch:Dispatch<ProductAction>) => {
    dispatch({
        type: ProductActionTypes.ADD_TO_BASKET,
        payload: product,
    })
}

export const removeFromBasket = (id:number)  => (dispatch:Dispatch<ProductAction>) =>{
    dispatch({
        type: ProductActionTypes.REMOVE_FROM_BASKET,
        payload: id
    })
}

export const clearBasket = ()  => (dispatch:Dispatch<ProductAction>) =>{
    dispatch({
        type: ProductActionTypes.CLEAR_BASKET,
    })
}

export const openOrderModal = () => (dispatch:Dispatch<ProductAction>)=>{
    dispatch({
        type: ProductActionTypes.OPEN_MODAL
    })
}
export const closeOrderModal = () => (dispatch:Dispatch<ProductAction>)=>{
    dispatch({
        type: ProductActionTypes.CLOSE_MODAL
    })
}