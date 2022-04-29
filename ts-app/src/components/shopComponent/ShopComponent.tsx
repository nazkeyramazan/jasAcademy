import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useCallback, useEffect} from "react";
import {useProductActions} from "../../hooks/useProductActions";
import {ProductBlock} from "./ProductBlock";
import {Basket} from "./Basket";
import { Grid } from "@mui/material";
import {Product} from "../../types/productTypes";

export function ShopComponent(){
    const { product, error, loading } = useTypedSelector((state) => state.product)
    const { fetchProducts, addToBasket } = useProductActions()
    const handleAddToBasket = useCallback((item:Product) =>{
        addToBasket(item)
    }, [addToBasket])
    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    if (loading) {
        return (
            <div className="loading">
                <div className="lds-spinner">
                    <div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/>
                </div>
            </div>
        )
    }
    if (error) {
        return (
            <h1 style={{ border: '1px solid red' }}>{error}</h1>
        )
    }

    return (
        <>
            <Grid container spacing={2}>
                {product.map((item) =>(
                    <Grid item xs={12} md={6} lg={3} key={item.id}>
                        <ProductBlock product={item} onAddToBasket={()=>handleAddToBasket(item)} />
                    </Grid>
                ))}
            </Grid>
            <Basket/>
            {/*<NewBasket/>*/}
            {/*<OrderForm/>*/}
        </>

    )

}