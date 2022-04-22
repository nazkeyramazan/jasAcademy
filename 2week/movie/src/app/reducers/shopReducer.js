import { ADD_TO_BASKET, CLEAR_BASKET, REMOVE_FROM_BASKET, SET_PRODUCTS } from "../actions/shopActions";

const inititalState = {
    products: [],
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
        case SET_PRODUCTS:
            newState.products = action.payload
            break;
        case ADD_TO_BASKET:
            let boo = containsObject(action.payload, newState.basket);
            if(boo){
                newState.basket.map(item=>{
                    if(item.id==action.payload.id)
                        item.cnt = item.cnt+1;
                });
                newState.basket = [...newState.basket]

            } else{
                newState.basket = [...newState.basket, action.payload]
                newState.basket.map(item=>{
                    if(item.id==action.payload.id)
                        item.cnt = 1;
                });
                newState.basket = [...newState.basket]

            }
            break;
        case REMOVE_FROM_BASKET:
            newState.basket.map(item=>{
                if(item.id == action.payload){
                    if(item.cnt>=2)
                        item.cnt = item.cnt-1;
                    else    
                    if(item.cnt===1){
                        newState.basket = state.basket.filter(product => product.id !== action.payload)
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