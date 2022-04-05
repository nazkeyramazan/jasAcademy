import React, {useContext, useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Auth} from "../../context/Auth";
import {Link, useNavigate} from 'react-router-dom';

function SignInForm(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {token, setToken} = useContext(Auth)
    const axios = require('axios').default;
    const navigate = useNavigate();
   
    function submit(e){
        e.preventDefault();
        const data = {
            email,
            password
        }
        sendUserData(data);
    }

    function sendUserData(userData){
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDuHsqhY4QZKFs0X487o2bM7ITRnzbYJHU`,
        {
            email: userData.email,
            password: userData.password,
            returnSercureToken: true
        })
        .then((data) => {
            setToken(data.data.idToken)
            localStorage.setItem('idToken', data.data.idToken)
            setEmail('');
            setPassword('');
            navigate('/rickAndMorty/')
        })
        .catch((error)=>{
            console.log(error)
            alert(`Failed to Authorize. Error message: ${error.response.data.error.message}`)
        })
    }
    return (  
        <form onSubmit={(e)=>submit(e)} style={{display:'flex', flexDirection:'column', alignItems:'center' , justifyContent:'flex-start', marginTop:'25px'}} >
            <TextField  value={email} type='email' label="email" onChange={(e)=>setEmail(e.target.value)} required/>
            <br/>
            <TextField value={password} type="password" label="password" required onChange={(e)=>setPassword(e.target.value)} />
            <br/>
            <Button style={{width:'225px'}} variant="contained" type="submit">
                Sign In
            </Button>
            {token ? 'AUTHORISED' : 'NOT AUTHORISED'}
            <Link to="/signUp/">Создать аккаунт</Link>
        </form>
    )
}

export default SignInForm;