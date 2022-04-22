import {styled} from "@mui/material";
import {useState, useCallback, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import { clearBasket, removeFromBasket } from "../../app/actions/shopActions";
import ClearAllIcon from '@mui/icons-material/ClearAll';
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
  cursor: pointer;
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


export function BasketItem({ product , handleRemoveItem}) {
    return (
        <Item>
            <div>
                {product.title}
                ${product.price}
                <b> {product.cnt}</b>
            </div>
            <div >
                <RemoveIcon  onClick={(e)=>{
                    handleRemoveItem(product.id)
                    e.stopPropagation();
                }}/>
            </div>
        </Item>
    )
}

export function Basket() {
    const [expanded, setExpanded] = useState(false)
    const dispatch = useDispatch();
    const basket = useSelector((state) => state.shopReducer.basket)
    const handleRemoveItem = useCallback((product) => {
        dispatch(removeFromBasket(product))
    }, [dispatch])
    const handleClearBasket = useCallback(() => {
        dispatch(clearBasket())
    }, [dispatch])
    const sum = useMemo(()=>{
        const a = basket !=[] ? basket.map((item)=>{
            return Math.round(item.price*100)/100 * Math.round(item.cnt*100)/100
        }).reduce((acc, item)=> acc + item ,0
        ) : 0;
        return a;  
    }, [basket]);

    return (
        <Wrapper onClick={() => setExpanded(!expanded)} expanded={expanded}>
            {!expanded ? <BasketIcon><ShoppingCartIcon/></BasketIcon>
             :
             <>
            {basket.map((product, index) => (
                <BasketItem product={product} key={index}  handleRemoveItem={handleRemoveItem}/>
                
            ))}
            
            <div className="clearIcon"> 
                <h4 title="Total cost">Total: {sum} $</h4>
                <ClearAllIcon onClick={(e)=>{
                    e.stopPropagation()
                    handleClearBasket()
                    }}/>
            </div>
                
            </>
            }
            
        </Wrapper>
    )
}