import React from 'react'
import {useState} from 'react'
import '../CSS/ChangePasswordPageCSS.css';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import {AuthenticationActions} from '../Redux/AuthenticationSlice';
import TitleLetterDisplay from './TitleLetterDisplay';

const ChangePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [error, setError] = useState("")

  const logout = () => {
    dispatch(AuthenticationActions.setAuthentication({isAuthenticated : false,
      expireDate : null,
      userId : null,
      userName : null,
      userEmail : null,
      tokenType : null,
      token : null}));
    localStorage.removeItem('TheAdventure');
  }

  const formHandler = (event) =>{
    event.preventDefault();
    if(newPassword!==confirmPassword){
      setError("Password and Confirm Password Not Same")
    }
    else{
      const changePasswordData = {'email':email,'currentPassword':currentPassword,'newPassword':newPassword};
      axios.patch("https://theadventure-travelblog.herokuapp.com/api/v1/user", changePasswordData)
              .then((res)=>{
                logout();
                navigate("/signin");
              })
              .catch((err)=>{
                setError(err.response.data.message);
              })
    }
  }
  return (
    <div className="change-password-page-main">
      <div className="change-password-page-login">
          <div className='change-password-page-login-head'> 
                <TitleLetterDisplay letter='C' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='H' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='A' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='N' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='G' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='E' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
          </div>
          <div className='change-password-page-login-head'> 
                <TitleLetterDisplay letter='P' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='A' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='S' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='S' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='W' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='O' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='R' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='D' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
          </div>
          <form onSubmit={formHandler} className="change-password-page-login-form">
            <input type="email" name="email" placeholder='Email'
                  value={email} onChange={event=>setEmail(event.target.value)}/> 
            <br/>
            <input type="password" name="currentPassword" placeholder='Current Password' minLength="8"
                  value={currentPassword} onChange={event=>setCurrentPassword(event.target.value)}/> 
            <br/>
            <input type="password" name="newPassword" placeholder='New Password' minLength="8"
                  value={newPassword} onChange={event=>setNewPassword(event.target.value)}/> 
            <br/>
            <input type="text" name="confirmPassword" placeholder='Confirm Password' minLength="8"
                  value={confirmPassword} onChange={event=>setConfirmPassword(event.target.value)}/> 
            <br/>
            <input type="submit" value="Change Password" placeholder='Change Password' className='change-password-page-login-form-submit'/> 
          </form>
          <h3 className={error==="" ? 'change-password-page-login-form-hidden' : 'change-password-page-login-form-display'}>{error}</h3>
      </div>
    </div>
  )
}

export default ChangePassword