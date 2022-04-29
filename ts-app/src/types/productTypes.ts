export enum ProductActionTypes {
    PRODUCT_FETCH = 'PRODUCT_FETCH',
    PRODUCT_FETCH_SUCCESS = 'PRODUCT_FETCH_SUCCESS',
    PRODUCT_FETCH_ERROR = 'PRODUCT_FETCH_ERROR',

    ADD_TO_BASKET = 'shop/addToBasket',
    REMOVE_FROM_BASKET = 'shop/removeFromBasket',
    CLEAR_BASKET = 'shop/clearBasket',

    OPEN_MODAL = 'shop/openOrderModal',
    CLOSE_MODAL = 'shop/closeOrderModal',
}
export type Product = {
    id:number
    title:string
    price:string
    category:string
    description:string
    image:string
    cnt?:number
    totalPrice? :number
}

export type reducerInitState = {
    product: Product[]
    loading: boolean
    error?: string
    basket: any
    orderModalState: boolean
}

export type ProductActionFetch = {
    type: ProductActionTypes.PRODUCT_FETCH
}
export type ProductActionFetchSuccess = {
    type: ProductActionTypes.PRODUCT_FETCH_SUCCESS,
    payload: Product[]
}
export type ProductActionFetchError = {
    type: ProductActionTypes.PRODUCT_FETCH_ERROR,
    payload: string
}
export type ProductAddToBasket = {
    type: ProductActionTypes.ADD_TO_BASKET,
    payload: Product
}
export type ProductRemoveFromBasket = {
    type: ProductActionTypes.REMOVE_FROM_BASKET,
    payload: number
}
export type ProductClearBasket = {
    type: ProductActionTypes.CLEAR_BASKET
}
export type ProductOpenOrderModal = {
    type: ProductActionTypes.OPEN_MODAL
}
export type ProductCloseOrderModal = {
    type: ProductActionTypes.CLOSE_MODAL
}
export type ProductAction = ProductActionFetch | ProductActionFetchSuccess |
                            ProductActionFetchError | ProductAddToBasket |
                            ProductRemoveFromBasket | ProductClearBasket |
    ProductOpenOrderModal | ProductCloseOrderModal
