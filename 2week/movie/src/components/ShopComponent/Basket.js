import {styled} from "@mui/material";
import {useState, useCallback, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import { addToBasket, clearBasket, removeFromBasket } from "../../app/actions/shopActions";
import ClearAllIcon from '@mui/icons-material/ClearAll';
import AddIcon from '@mui/icons-material/Add';

const Wrapper = styled('div')`
  position: fixed;
  z-index: 1000;
  right: 20px;
  top: 80px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: antiquewhite;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .2s;
  ${({ expanded }) => (expanded && `
    width: 400px;
    height: 400px;
    background: white;
    border: 2px solid antiquewhite;
    border-radius: 10px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 16px;
  `)}
`
const BasketIcon = styled('span')`
  font-size: 40px;
`
const Item = styled('div')`
    background-color:antiquewhite;
    margin:4px;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: -webkit-fill-available;
`
const RightSide = styled('div')`
    display:flex;
    `


function BasketItem({ product , handleRemoveItem, handleAddItem}) {
    return (
        <Item>
            <div>
                {product.title}
                ${product.price}
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
        </Item>
    )
}

export function Basket() {
    const [expanded, setExpanded] = useState(false)
    const dispatch = useDispatch();
    const basket = useSelector((state) => state.shopReducer.basket)

    const handleRemoveItem = useCallback((id) => {
        dispatch(removeFromBasket(id))
    }, [dispatch])
    
    const handleAddItem = useCallback((product)=>{
        dispatch(addToBasket(product))
    }, [dispatch])

    const handleClearBasket = useCallback(() => {
        dispatch(clearBasket())
    }, [dispatch])
    const sum = useMemo(()=>{
        const a = basket !==[] ? basket.map((item)=>{
            return Math.round(item.price*100)/100 * Math.round(item.cnt*100)/100
        }).reduce((acc, item)=> acc + item ,0
        ) : 0;
        return a;  
    }, [basket]);

    return (
        <Wrapper title="open a basket" onClick={() => setExpanded(!expanded)} expanded={expanded}>
            {!expanded ? <BasketIcon><ShoppingCartIcon/></BasketIcon>
             :
             <>
            {basket.map((product, index) => (
                <BasketItem product={product} key={index} handleRemoveItem={handleRemoveItem}  handleAddItem={handleAddItem}/>
                
            ))}
            
            <div className="clearIcon"> 
                <h4 title="Total cost">Total: {Math.round(sum*1000)/1000} $</h4>
                <ClearAllIcon style={{cursor:'pointer'}} onClick={(e)=>{
                    e.stopPropagation()
                    handleClearBasket()
                    }}/>
            </div>
                
            </>
            }
            
        </Wrapper>
    )
}