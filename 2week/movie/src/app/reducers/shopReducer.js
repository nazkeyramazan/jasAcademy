import { ADD_TO_BASKET, ADD_PRODUCT_TO_REDUX_STORE, CLEAR_BASKET, REMOVE_FROM_BASKET, SET_PRODUCTS, SET_ONE_PRODUCT, SET_LOADING } from "../actions/shopActions";

const inititalState = {
    products: [],
    loading: true,
    product: {},
    basket: JSON.parse(localStorage.getItem('basket')) || [],
}
function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}
export const shopReducer = function(state=inititalState , action){
    const newState = {...state};
    switch (action.type) {
        case SET_LOADING:
            newState.loading = action.payload
            break; 
        case SET_PRODUCTS:
            newState.products = action.payload
            break;
        case SET_ONE_PRODUCT:
            newState.product = action.payload
            break;
        case ADD_PRODUCT_TO_REDUX_STORE:
            newState.products = [...newState.products, action.payload]
            break;
        case ADD_TO_BASKET:
            let boo = containsObject(action.payload, newState.basket);
            if(boo){
                newState.basket.map(item=>{
                    if(item.id===action.payload.id){
                        item.cnt = item.cnt+1;
                        item.totalPrice = item.cnt * item.price;
                    }
                });
                newState.basket = [...newState.basket]

            } else{
                newState.basket = [...newState.basket, action.payload]
                newState.basket.map(item=>{
                    if(item.id===action.payload.id){
                        item.cnt = 1;
                        item.totalPrice = action.payload.price
                    }
                });
                newState.basket = [...newState.basket]

            }
            break;
        case REMOVE_FROM_BASKET:
            newState.basket.map(item=>{
                if(item.id === action.payload){
                    if(item.cnt>=2){
                        item.cnt = item.cnt-1;
                        item.totalPrice = item.cnt * item.price;
                    }
                    else    
                    if(item.cnt===1){
                        newState.basket = state.basket.filter(product => product.id !== action.payload)
                        item.totalPrice = 0 * item.price;
                    }    
                }
            });
            newState.basket = [...newState.basket]
            break; 
        case CLEAR_BASKET:
            newState.basket = []
            break;       
        default:
            return state
    }
    localStorage.setItem('basket', JSON.stringify(newState.basket))
    return newState
}