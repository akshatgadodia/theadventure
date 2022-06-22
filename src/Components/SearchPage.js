import React from 'react'
import LoadingSign from './LoadingSign.js';
import '../CSS/SearchPageCSS.css';
import TitleLetterDisplay from './TitleLetterDisplay';

const SearchPage = () => {
  return (
    <div>
      <div className='search-main-title'>
                <TitleLetterDisplay letter='S'/>
                <TitleLetterDisplay letter='E'/>
                <TitleLetterDisplay letter='A'/>
                <TitleLetterDisplay letter='R'/>
                <TitleLetterDisplay letter='C'/>
                <TitleLetterDisplay letter='H'/>
        </div>
    </div>
  )
}

export default SearchPage