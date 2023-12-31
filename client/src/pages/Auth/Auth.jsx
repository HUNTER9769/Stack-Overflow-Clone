import React, { useState } from 'react'
import './Auth.css'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'
const Auth = () => {

  const [isSignUp, setIsSignUp] = useState(false)
  const handleSwitch = () => {
    setIsSignUp(!isSignUp)
  }
  return (
    <section class='auth-section'>
        { isSignUp && <AboutAuth/>}
        <div class='auth-container-2'>
            {!isSignUp &&<img src={icon} alt='stack overflow' className='login-logo'/> }
            <form >
                {
                    isSignUp && (
                         <label htmlFor='name'>
                            <h4>Display Name</h4>
                            <input type="text" id="name" name="name" />

                         </label>
                    )
                }
                <label htmlFor='email'>
                    <h4>Email</h4>
                    <input type="email" name='email' id='email' />
                    <div style={{display: 'flex', justifyContent: 'space-between' }}>
                    <h4>Password</h4>
                    {!isSignUp && <h4 style={{color:"#007ac6"}}>Forgot Password</h4>}
                    </div>
                    <input type="password" name='passwordS' id='password' />
                    {isSignUp &&  <p>Password must contain atleast 8<br/> characters, including at least 1
                     <br/>letter and 1 number<br /></p>}
                </label>
                {
                    isSignUp && (
                        <label htmlFor='check'>
                            <input type="checkbox" id='check'/>
                            <p>Opt-in to receive occasional product updates<br />, user research invitation<br />, company, annoucements and digests<br /></p>
                        </label>
                    )
                }
                <button type='submit' className='auth-btn'>{isSignUp ? 'Sign up':' Log in '} </button>
                {
                    isSignUp && (
                        <p style={{color:"#666767", fontSize:"13px"}}>By clicking "Sign Up", you agree to our <span style={{color: "#007ac6"}}>terms of <br /> service</span> our  <span style={{color: "#007ac6"}}>privacy policy</span> and <span style={{color: "#007ac6"}}>cookie policy</span></p>
                    )
                }
            </form>
            <p>
                {isSignUp ? 'already have an account?': "Dont have an account ? "}
                <button type='button' className='handle-switch-button' onClick={handleSwitch}>{ isSignUp ? "Log In "  : "Sign Up" }</button>
            </p>
        </div>

    </section>
  )
}

export default Auth