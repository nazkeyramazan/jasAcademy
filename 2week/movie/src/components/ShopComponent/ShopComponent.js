import { Container, Grid } from "@mui/material";
import { useEffect, useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts} from '../../app/actions/shopActions'
import { ProductBlock } from "./ProductBlock";
import {addToBasket} from '../../app/actions/shopActions'
import { NewBasket } from "./newBasket";
import {OrderForm} from "./OrderForm";

function ShopComponent(){

    const dispatch = useDispatch()
    const products = useSelector((state)=>state.shopReducer.products)
    const loading = useSelector((state)=>state.shopReducer.loading)
    useEffect(()=>{
        dispatch(fetchProducts())
    }, [dispatch])

    const handleAddToBasket = useCallback((product) => {
        dispatch(addToBasket(product))
    }, [dispatch])

    return (
        <Container>
            {loading ? 
            <div className="loading">
                <div className="lds-spinner">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>

                </div>
            </div>
             
            :
            <>
            <Grid container spacing={2}>
                {products.map((product) => (
                    <Grid item xs={12} md={6} lg={3} key={product.id}>
                        <ProductBlock product={product} onAddToBasket={() => handleAddToBasket(product)} />
                    </Grid>
                ))}
            </Grid>
            {/* <Basket/> */}

                <NewBasket/>
                <OrderForm/>

            </>
            }
            
        </Container>
    )
}


export default ShopComponent;