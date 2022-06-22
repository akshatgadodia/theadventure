import React from 'react'
import '../CSS/ProfilePageCSS.css';
import TitleLetterDisplay from './TitleLetterDisplay';

const ProfilePage = () => {
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
    </div>
  )
}

export default ProfilePage