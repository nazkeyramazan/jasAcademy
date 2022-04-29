import {Reducer} from 'redux'
import {ProductAction, ProductActionTypes, reducerInitState} from "../../types/productTypes";
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
        default:
            return state
    }
    localStorage.setItem('basket', JSON.stringify(newState.basket))
    return newState
}