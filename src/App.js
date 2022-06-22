import React,{ Suspense } from 'react'
import './App.css';
import { useSelector } from 'react-redux';
import HomePage from './Components/HomePage.js';
import NavigationBar from './Components/NavigationBar.js';
import Blogs from './Components/Blogs.js';
import LoadingSign from './Components/LoadingSign.js';
import { Routes,Route } from 'react-router-dom';
import Footer from './Components/Footer';
const SignInPage = React.lazy(() => import('./Components/SignInPage.js'));
const BlogPostPage = React.lazy(() => import('./Components/BlogPostPage.js'));
const SignUpPage = React.lazy(() => import('./Components/SignUpPage.js'));
const SearchPage = React.lazy(() => import('./Components/SearchPage.js'));
const ResourceNotFoundPage = React.lazy(() => import('./Components/ResourceNotFoundPage.js'));
const ProfilePage = React.lazy(() => import('./Components/ProfilePage.js'));
const WriteBlogPage = React.lazy(() => import('./Components/WriteBlogPage.js'));

const App = () => {
  const isAuthenticated = useSelector(state=>state.authentication.isAuthenticated);
  return (
    <div>
      <Suspense fallback={<div><LoadingSign/></div>}>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<><HomePage /><Blogs/></>}/>
          <Route path="/blogs" element={<BlogPostPage/>}/>
          <Route path="/blogs/:blogId" element={<BlogPostPage/>}/>
          <Route path="/signin" element={isAuthenticated ? <HomePage/> : <SignInPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="search" element={<SearchPage/>}/>
          <Route path="/write" element={<WriteBlogPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route path="*" element={<ResourceNotFoundPage/>}/>
        </Routes>
        <Footer/>
      </Suspense>
    </div>
  )
}

export default App
