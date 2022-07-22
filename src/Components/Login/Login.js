import { Link, useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import './Login.css'
import { auth } from '../../firebase'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault()

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth)=>{
                console.log(auth)
                if (auth){
                    history.push('./')
                }
            })
    }

    const register = (e) => {
        e.preventDefault()

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=>{
                if (auth){
                    history.push('./')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'> 
                <img
                className='login__logo' 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png'
                alt=''
                />
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5> E-mail</h5>  
                    <input type='text' 
                    value={email} 
                    onChange= {(e)=> setEmail(e.target.value)}/>
                    
                    <h5> Password</h5>  
                    <input type='password' 
                    value={password}
                    onChange= {(e)=> setPassword(e.target.value)}/>
                    
                    <button type='submit'
                    className='login__signInButton'
                    onClick={signIn}
                    >Sign in</button>
                </form>
                <p> 
                    By continuing, you agree to Amazon's Conditions of 
                    Use and Privacy Notice. </p>
                <button onClick={register} 
                className='login__registerButton'> Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
