import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './Auth.css'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'
import { signup, login  } from '../../actions/auth'
const Auth = () => {

    const [isSignup, setIsSignup] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSwitch = () => {
    setIsSignup(!isSignup)
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      if(!email && !password) {
        alert('Enter Email and Password to continue.')
      }

      if(isSignup) {
        if(!name) {
            alert('Enter Name to continue.')
        }
        dispatch(signup({ name, email, password}, navigate))
      }else {
        dispatch(login({ email, password}, navigate))
      }

    } 


  return (
    <section className='auth-section'>
        { isSignup && <AboutAuth/>}
        <div className='auth-container-2'>
            {!isSignup &&<img src={icon} alt='stack overflow' className='login-logo'/> }
            <form onSubmit={handleSubmit} >
                {
                    isSignup && (
                         <label htmlFor='name'>
                            <h4>Display Name</h4>
                            <input type="text" id="name" name="name" onChange={(e) => {setName(e.target.value)} }/>

                         </label>
                    )
                }
                <label htmlFor='email'>
                    <h4>Email</h4>
                    <input type="email" name='email' id='email' onChange={(e) => {setEmail(e.target.value)} }/>
                    <div style={{display: 'flex', justifyContent: 'space-between' }}>
                    <h4>Password</h4>
                    {!isSignup && <h4 style={{color:"#007ac6"}}>Forgot Password</h4>}
                    </div>
                    <input type="password" name='passwordS' id='password' onChange={(e) => {setPassword(e.target.value)}} />
                    {isSignup &&  <p>Password must contain atleast 8<br/> characters, including at least 1
                     <br/>letter and 1 number<br /></p>}
                </label>
                {
                    isSignup && (
                        <label htmlFor='check'>
                            <input type="checkbox" id='check'/>
                            <p>Opt-in to receive occasional product updates<br />, user research invitation<br />, company, annoucements and digests<br /></p>
                        </label>
                    )
                }
                <button type='submit' className='auth-btn'>{isSignup ? 'Sign up':' Log in '} </button>
                {
                    isSignup && (
                        <p style={{color:"#666767", fontSize:"13px"}}>By clicking "Sign Up", you agree to our <span style={{color: "#007ac6"}}>terms of <br /> service</span> our  <span style={{color: "#007ac6"}}>privacy policy</span> and <span style={{color: "#007ac6"}}>cookie policy</span></p>
                    )
                }
            </form>
            <p>
                {isSignup ? 'already have an account?': "Dont have an account ? "}
                <button type='button' className='handle-switch-button' onClick={handleSwitch}>{ isSignup ? "Log In "  : "Sign Up" }</button>
            </p>
        </div>

    </section>
  )
}

export default Auth