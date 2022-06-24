import React from 'react'
import '../CSS/NavigationBarCSS.css';
import '../CSS/BlogCSS.css';
import CreateIcon from '@mui/icons-material/Create';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import FeedIcon from '@mui/icons-material/Feed';
import { useSelector,useDispatch } from 'react-redux';
import {NavLink} from 'react-router-dom';
import {AuthenticationActions} from '../Redux/AuthenticationSlice';

const NavigationBar = () => {
  const isAuthenticated = useSelector(state=>state.authentication.isAuthenticated);
  const dispatch = useDispatch();

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
  return (
    <div className='navigation-bar-main'>
        <div className="navigation-bar-main-title">
          <NavLink to="/" className='navigation-bar-main-navlink'>
            <h2>TheAdventure</h2>
          </NavLink>
        </div>
      
        <div className="navigation-bar-main-menus">
          {isAuthenticated && 
              <div className='navigation-bar-tooltip'>
              <NavLink to="/write" className='navigation-bar-main-navlink'>
                <CreateIcon/>
              </NavLink>
                <span className='navigation-bar-tooltiptext'>Write Blog</span>
              </div>
          } 
            <div className='navigation-bar-tooltip'>
              <NavLink to="/blogs" className='navigation-bar-main-navlink'>
                <FeedIcon/>
              </NavLink>
              <span className='navigation-bar-tooltiptext'>Blogs</span>
            </div>
            <div className='navigation-bar-tooltip'>
              <NavLink to={isAuthenticated ? '/profile' : '/signin'} className='navigation-bar-main-navlink'>
                <PersonIcon/>
              </NavLink>
                <span className='navigation-bar-tooltiptext'>{isAuthenticated ? 'Profile' : 'Login'}</span>
            </div>
            <div className='navigation-bar-tooltip'>
              <button className={isAuthenticated ? 'navigation-bar-main-navlink' : 'navigation-bar-main-navlink-hidden'}
                      style={{paddingTop:'0'}} onClick={logout}>
                <LogoutIcon/>
              </button>
                <span className='navigation-bar-tooltiptext'>Logout</span>
            </div>
            
        </div>
    </div>
  )
}

export default NavigationBar