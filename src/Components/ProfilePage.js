import React from 'react'
import '../CSS/ProfilePageCSS.css';
import TitleLetterDisplay from './TitleLetterDisplay';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const ProfilePage = () => {
  const userName = useSelector(state=>state.authentication.userName);
  const email = useSelector(state=>state.authentication.userEmail);
  return (
    <div>
        <div className='profile-main-title'>
                <TitleLetterDisplay letter='P'/>
                <TitleLetterDisplay letter='R'/>
                <TitleLetterDisplay letter='O'/>
                <TitleLetterDisplay letter='F'/>
                <TitleLetterDisplay letter='I'/>
                <TitleLetterDisplay letter='L'/>
                <TitleLetterDisplay letter='E'/>
        </div>
        <div className='profile-main-div'>
          <h1>{userName}</h1>
          <h3>{email}</h3>
          <h3><Link to="/changepassword" className='profile-main-link'>Change Password</Link></h3>
        </div>
    </div>
  )
}

export default ProfilePage