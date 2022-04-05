import React, {useState, useContext} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link, Navigate} from 'react-router-dom';
import {Auth} from "../../context/Auth";


function SignUpForm({onSuccess}){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [spassword, setsPassword] = useState('')
    const {setToken} = useContext(Auth)

    const axios = require('axios').default;
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    function submit(e){
        e.preventDefault();
        
        let validate = regex.test(password);
        if(validate){
            if(password === spassword){
                const data = {
                    email,
                    password
                }
                sendUserData(data);
            <Navigate to="/rickAndMorty/" />

            }else
            if(password !== spassword){
                alert('Пароли не совпадают')
            }

        } else{
            alert("Password must contain 1 camelcase, 1 lowercase, 1 number and at least 8 symbols")
        }

    }

    function sendUserData(userData){
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDuHsqhY4QZKFs0X487o2bM7ITRnzbYJHU`,
        {
            email: userData.email,
            password: userData.password,
            returnSercureToken: true
        })
        .then((data) => {
            console.log(data)
            setToken(data.data.idToken)
            localStorage.setItem('idToken', data.data.idToken)
            setEmail('');
            setPassword('');
        })
        .catch((error)=>{
            console.log(error)
            alert(`User not registered. Error message: ${error.response.data.error.message}`)
        })
        
    }
    return  <form onSubmit={(e)=>submit(e)} style={{display:'flex', flexDirection:'column', alignItems:'center' , justifyContent:'space-between', marginTop:'25px'}} >
                <TextField  value={email} type='email' label="email" onChange={(e)=>setEmail(e.target.value)} required/>
                <br/>
                <TextField value={password} type="password" label="password" required onChange={(e)=>setPassword(e.target.value)} />
                <br/>
                <TextField value={spassword} type="password" label="password" required onChange={(e)=>setsPassword(e.target.value)} />
                <br/>
                <Button style={{width:'225px'}} variant="contained" type="submit">
                    Sign Up
                </Button>
                <Link to='/signIn/'> Уже есть аккаунт? Войти </Link>
            </form>

}

export default SignUpForm;