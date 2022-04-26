import React, {useState, useCallback, useMemo} from 'react'
import {Button, styled} from "@mui/material";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import RemoveIcon from '@mui/icons-material/Remove';
import {addToBasket, clearBasket, OPEN_MODAL, removeFromBasket} from "../../app/actions/shopActions";
import ClearAllIcon from '@mui/icons-material/ClearAll';
import AddIcon from '@mui/icons-material/Add';
const Wrapper = styled('div')`
  position: absolute;
  z-index: 1000;
  right: 20px;
  top:80px;
  width: 50px;
  height: 50px;
`
const BasketContainer = styled('div')`
  display: flex;
  width: 400px;
  align-items: center;
  flex-direction: column;
`
const Item = styled('div')`
    background-color:white;
    margin:4px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid antiquewhite;
    width: -webkit-fill-available;
    padding: 5px;
`
const BasketItemTopBlock = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center
    

`
const BasketItemBottomBlock = styled('div')`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center

`
const RightSide = styled('div')`
    display:flex;
    `
const emptyCart = 'data:image/png;base64,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'
const ImageInBasket = styled('img')`
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 15%;
`

function BasketItem({product , handleRemoveItem, handleAddItem}) {
    return (
        <Item>

            <BasketItemTopBlock >
                <ImageInBasket src={product.image}  alt=''/>
                {product.title}
            </BasketItemTopBlock>
            <BasketItemBottomBlock>
                <div>
                    <b>
                        ${product.totalPrice}
                    </b>
                </div>
                <RightSide>
                    
                    <AddIcon style={{cursor:'pointer'}} onClick={(e)=>{
                        handleAddItem(product)
                        e.stopPropagation();
                    }} />
                    <b> {product.cnt}</b>
                    <RemoveIcon style={{cursor:'pointer'}} onClick={(e)=>{
                        handleRemoveItem(product.id)
                        e.stopPropagation();
                    }}/>
                </RightSide>
            </BasketItemBottomBlock>
            
        </Item>
    )
}

export function NewBasket(){
    const [right, setRigth] = useState(false);

    const openBasket = () => {
        setRigth(true)
    }
    const closeBasket = () => {
        setRigth(false)
    }
    const dispatch = useDispatch();
    const basket = useSelector((state) => state.shopReducer.basket)
    const openModal = useCallback(()=>{
        dispatch({type: OPEN_MODAL})
    }, [dispatch])
    const handleRemoveItem = useCallback((id) => {
        dispatch(removeFromBasket(id))
    }, [dispatch])
    
    const handleAddItem = useCallback((product)=>{
        dispatch(addToBasket(product))
    }, [dispatch])

    const handleClearBasket = useCallback(() => {
        dispatch(clearBasket())
    }, [dispatch])
    const productCount = useMemo(()=>{
        const a = basket !==[] ? basket.map((item)=>{
            return item.cnt
        }).reduce((acc, item)=> acc + item ,0
        ) : 0;
        return a; 
    }, [basket])
    const sum = useMemo(()=>{
        const a = basket !==[] ? basket.map((item)=>{
            return Math.round(item.price*100)/100 * Math.round(item.cnt*100)/100
        }).reduce((acc, item)=> acc + item ,0
        ) : 0;
        return a;  
    }, [basket]);
    return (
        <Wrapper>
        
            <Button onClick={openBasket}><ShoppingCartIcon/></Button>
            <SwipeableDrawer
                anchor={"right"}
                open={right}
                onClose={closeBasket}
                onOpen={openBasket}
            >
                
                <>
                {basket.length === 0 ?
                    <img src={emptyCart} alt=""/>
                :
                <BasketContainer>
                <h4 title="Total cost"> {productCount} Products for {Math.round(sum*1000)/1000}$</h4>

                {basket.map((product, index) => (
                    <BasketItem product={product} key={index} handleRemoveItem={handleRemoveItem}  handleAddItem={handleAddItem}/>
                    
                ))}

                    <div className="clearIcon"> 
                        <Button variant="outlined" onClick={()=>openModal()}>Order</Button>
                        <button title="clear basket">
                            <ClearAllIcon style={{cursor:'pointer'}} onClick={(e)=>{
                                e.stopPropagation()
                                handleClearBasket()
                                }}/>
                        </button>
                        
                    </div>
                </BasketContainer>
                } 
            </> 
            </SwipeableDrawer> 
          </Wrapper>  
    )
}