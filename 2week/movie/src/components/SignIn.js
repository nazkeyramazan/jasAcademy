import React, {useState} from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';


const data = [
    {email: 'user@gmail.com' , password: 'admin123'},
    {email: 'user2@gmail.com' , password: 'admin123'},
    {email: 'user3@gmail.com' , password: 'admin123'},
    {email: 'user4@gmail.com' , password: 'admin123'},
    {email: 'user5@gmail.com' , password: 'admin123'},
]
function SignIn(){

    const [users, setUsers] = useState(data);
    
    return <div className='signInBlock'>
        <SignInForm/>   
        <SignUpForm/>
        <div>
            {users.map((item, index)=>{
            return <div key={index}>
                    <p className='textGray'>email: {item.email}</p>
                    <p className='textGray'>password: {item.password}</p>
                </div>
        })}
        </div>
    </div>
}

export default SignIn;