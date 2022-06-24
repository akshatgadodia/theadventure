import React from 'react'
import {useState} from 'react'
import '../CSS/SignInPageCSS.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import {AuthenticationActions} from '../Redux/AuthenticationSlice';
import TitleLetterDisplay from './TitleLetterDisplay';

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const formHandler = (event) =>{
    event.preventDefault();
    if(email===""||password===""){
        alert("Please Enter Correct Credentials");
    }
    const loginData = {'email':email,'password':password};
    console.log(loginData)
    axios.post("https://theadventure-travelblog.herokuapp.com/api/v1/auth/signin", loginData)
              .then((res)=>{
                setError("");
                const date = new Date();
                date.setDate(date.getDate() + 6);
                dispatch(AuthenticationActions.setAuthentication({'isAuthenticated':true,'expireDate':date.toLocaleDateString(),...res.data}));
                localStorage.setItem('TheAdventure',JSON.stringify({'isAuthenticated':true,...res.data}))
                navigate("/")
              })
              .catch((err)=>{
                setError(err.response.data.message);
              })
    setPassword("");
  }
  return (
    <div className="sign-in-page-main">
      <div className="sign-in-page-login">
          <div className='sign-in-page-login-head'> 
                <TitleLetterDisplay letter='L' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='O' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='G' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='I' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='N' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
          </div>
          <form onSubmit={formHandler} className="sign-in-page-login-form">
            <input type="email" name="email" placeholder='Email'
                  value={email} onChange={event=>setEmail(event.target.value)}/> 
            <br/>
            <input type="password" name="password" placeholder='Password' minLength="8"
                  value={password} onChange={event=>setPassword(event.target.value)}/> 
            <br/>
            <input type="submit" value="Login" placeholder='Login' className='sign-in-page-login-form-submit'/> 
          </form>
          <h3 className={error==="" ? 'sign-in-page-login-form-hidden' : 'sign-in-page-login-form-display'}>{error}</h3>
          <h4>Don't Have An Account <Link className="sign-in-page-main-link" to="/signup">Register Now</Link></h4>
      </div>
    </div>
  )
}

export default SignInPage