import React,{ Suspense,useEffect,useState } from 'react'
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import NavigationBar from './Components/NavigationBar.js';
import Blogs from './Components/Blogs.js';
import LoadingSign from './Components/LoadingSign.js';
import { Routes,Route } from 'react-router-dom';
import Footer from './Components/Footer';
import {AuthenticationActions} from './Redux/AuthenticationSlice';
import { UserPage } from './Components/UserPage';
const HomePage = React.lazy(() => import('./Components/HomePage.js'));
const SignInPage = React.lazy(() => import('./Components/SignInPage.js'));
const BlogPostPage = React.lazy(() => import('./Components/BlogPostPage.js'));
const SignUpPage = React.lazy(() => import('./Components/SignUpPage.js'));
const ResourceNotFoundPage = React.lazy(() => import('./Components/ResourceNotFoundPage.js'));
const ProfilePage = React.lazy(() => import('./Components/ProfilePage.js'));
const WriteBlogPage = React.lazy(() => import('./Components/WriteBlogPage.js'));
const ChangePassword = React.lazy(() => import('./Components/ChangePassword.js'));

const App = () => {
  const [isAuthenticated,setIsAuthenticated] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    const getLoginData = () =>{
      //useSelector(state=>state.authentication.isAuthenticated)
      const data = JSON.parse(localStorage.getItem('TheAdventure'));
      //console.log(JSON.parse(data));
      if(data!==null){
        const today = new Date()
        const expireDate = new Date(data.expireDate);
        if(today>expireDate){
          localStorage.removeItem('TheAdventure');
        }
        else{
          dispatch(AuthenticationActions.setAuthentication(data))
          setIsAuthenticated(data.isAuthenticated);
        }
      }
    }
    getLoginData()
  }, [])
  
  return (
    <div>
      <Suspense fallback={<div><LoadingSign/></div>}>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<><HomePage /><Blogs/></>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/blogs/:blogId" element={<BlogPostPage/>}/>
          <Route path="/users/:userId" element={<UserPage/>}/>
          <Route path="/signin" element={isAuthenticated ? <HomePage/> : <SignInPage/>}/>
          <Route path="/signup" element={isAuthenticated ? <HomePage/> : <SignUpPage/>}/>
          <Route path="/write" element={<WriteBlogPage/>}/>
          <Route path="/profile" element={isAuthenticated ? <ProfilePage/> : <SignInPage/>}/>
          <Route path="/changepassword" element={isAuthenticated ? <ChangePassword/> : <SignInPage/>}/>
          <Route path="*" element={<ResourceNotFoundPage/>}/>
        </Routes>
        <Footer/>
      </Suspense>
    </div>
  )
}

export default App
