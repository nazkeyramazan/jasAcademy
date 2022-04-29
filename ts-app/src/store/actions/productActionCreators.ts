import axios from 'axios'
import { Dispatch } from 'redux'
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
//
// export const removeFromBasket = (product:Product)  => dispatch =>{
//     dispatch({
//         type: REMOVE_FROM_BASKET,
//         payload: product
//     })
// }
//
// export const clearBasket = ()  => dispatch =>{
//     dispatch({
//         type: CLEAR_BASKET,
//     })
// }