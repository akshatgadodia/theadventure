import React from 'react'
import {useState} from 'react'
import '../CSS/SignUpPageCSS.css';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
import TitleLetterDisplay from './TitleLetterDisplay';

const SignUpPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const formHandler = (event) =>{
    event.preventDefault();
    if(password!==confirmPassword){
      setError("Password and Confirm Password Not Same")
    }
    else{
      const loginData = {'email':email,'password':password,'name':name};
      axios.post("http://192.168.29.39:8080/api/v1/auth/signup", loginData)
              .then((res)=>{
                navigate("/signin")
                console.log(res)
              })
              .catch((err)=>{
                setError(err.response.data.message);
              })
    }
    
  }
  return (
    <div className="sign-up-page-main">
      <div className="sign-up-page-login">
          <div className='sign-up-page-login-head'> 
                <TitleLetterDisplay letter='R' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='E' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='G' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='I' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='S' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='T' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='E' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='R' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
          </div>
          <form onSubmit={formHandler} className="sign-up-page-login-form">
            <input type="text" name="name" placeholder='Name' minLength="5"
                  value={name} onChange={event=>setName(event.target.value)}/> 
            <br/>
            <input type="email" name="email" placeholder='Email'
                  value={email} onChange={event=>setEmail(event.target.value)}/> 
            <br/>
            <input type="password" name="password" placeholder='Password' minLength="8"
                  value={password} onChange={event=>setPassword(event.target.value)}/> 
            <br/>
            <input type="text" name="confirmPassword" placeholder='Confirm Password' minLength="8"
                  value={confirmPassword} onChange={event=>setConfirmPassword(event.target.value)}/> 
            <br/>
            <input type="submit" value="Register" placeholder='Register' className='sign-up-page-login-form-submit'/> 
          </form>
          <h3 className={error==="" ? 'sign-up-page-login-form-hidden' : 'sign-up-page-login-form-display'}>{error}</h3>
      </div>
    </div>
  )
}

export default SignUpPage