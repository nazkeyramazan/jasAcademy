import {Reducer} from 'redux'
import {Product, ProductAction, ProductActionTypes, reducerInitState} from "../../types/productTypes";

const initState = {
    product: [],
    loading: false,
    basket: JSON.parse(localStorage.getItem('basket') || '[]')
}
function containsObject(obj: object, list:any) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}
export const productReducer: Reducer<reducerInitState, ProductAction> = (state = initState, action) => {
    const newState = {...state};
    switch (action.type) {
        case ProductActionTypes.PRODUCT_FETCH:
            return { ...newState, loading: true, error: undefined }
            break
        case ProductActionTypes.PRODUCT_FETCH_SUCCESS:
            return { ...newState, product: action.payload, loading: false }
            break
        case ProductActionTypes.PRODUCT_FETCH_ERROR:
            return { ...newState, error: action.payload, loading: false }
            break
        case ProductActionTypes.ADD_TO_BASKET:

            let boo = containsObject(action.payload, newState.basket);
            if(boo){
                newState.basket.map((item:any)=>{
                    if(item.id===action.payload.id){
                        item.cnt = item.cnt+1;
                        item.totalPrice = item.cnt * item.price;
                    }
                });
                newState.basket = [...newState.basket]

            } else{
                newState.basket = [...newState.basket, action.payload]
                newState.basket.map((item:any)=>{
                    if(item.id===action.payload.id){
                        item.cnt = 1;
                        item.totalPrice = action.payload.price
                    }
                });
                newState.basket = [...newState.basket]

            }
            break
        case ProductActionTypes.REMOVE_FROM_BASKET:
            newState.basket.map((item:any)=>{
                if(item.id === action.payload){
                    if(item.cnt>=2){
                        item.cnt = item.cnt-1;
                        item.totalPrice = item.cnt * item.price;
                    }
                    else
                    if(item.cnt===1){
                        newState.basket = state.basket.filter((product:Product) => product.id !== action.payload)
                        item.totalPrice = 0 * item.price;
                    }
                }
            });
            newState.basket = [...newState.basket]
            break
        case ProductActionTypes.CLEAR_BASKET:
            newState.basket = [];
            break
        default:
            return state
    }
    localStorage.setItem('basket', JSON.stringify(newState.basket))
    return newState
}