import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useDispatch } from 'react-redux';
import { addProductToReduxStore } from '../../app/actions/shopActions';

export function AddNewProduct( ){

    const [openModal, setOpenModal] = useState(false)
    const [product, setProduct] = useState({
        title:'',
        price: 0,
        decription: '',
        image: '',
        category: ''
    })
    const dispatch = useDispatch();
    const handleClickOpen = () =>{
        setOpenModal(true)
    }
    const handleClose = () =>{
        setOpenModal(false)
    }
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
      }
    const handleAdd = () =>{
        const data = product;
        if(data.image === ''){
            data.image = 'https://tl.rulate.ru/i/book/19/10/18925.jpg'
        }
        data.id = getRandomInt(21, 10000);
        data.rating = {rate:4.5, count: 5};
        dispatch(addProductToReduxStore(data))
        setProduct({
            title:'',
            price: 0,
            decription: '',
            image: '',
            category: ''
        })
        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(product)
        })
            .then(res=>res.json())
            .then(res=>console.log(res))
        setOpenModal(false)

    }
    const handleInputChange = (e) =>{
        const {name , value} = e.target
        setProduct(prev=>{
            return {
                ...prev,
                [name]: value
            }
        })
    }
    return(
        <div>
            <Button 
                style={{display:'flex', alignItems:'center'}}
                onClick={handleClickOpen}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                <AddCircleIcon/>
                Add Product
            </Button>
            <Dialog open={openModal} onClose={handleClose}>
                <DialogTitle>Add New Product</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To add a new product to this website, please enter 
                        Title, Price, Description, image and Category of Product
                    </DialogContentText>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="productTitle">Title</InputLabel>
                        <OutlinedInput
                            value={product.title} 
                            name='title' 
                            onChange={(e)=>handleInputChange(e)} 
                            label="Title"
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="productPrice">price</InputLabel>
                        <OutlinedInput
                            value={product.price} 
                            name='price' 
                            onChange={(e)=>handleInputChange(e)} 
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="price"
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="productDecription">Decription</InputLabel>
                        <OutlinedInput
                            value={product.decription} 
                            name='decription' 
                            onChange={(e)=>handleInputChange(e)} 
                            label="Decription"
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="productimage">Image Link</InputLabel>
                        <OutlinedInput
                            value={product.image} 
                            name='image' 
                            onChange={(e)=>handleInputChange(e)} 
                            label="image"
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="productCategory">Category</InputLabel>
                        <OutlinedInput
                            value={product.category} 
                            name='category' 
                            onChange={(e)=>handleInputChange(e)} 
                            label="category"
                        />
                    </FormControl>
                   

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleAdd}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>

    )
}

 export default AddNewProduct;