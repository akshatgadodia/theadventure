import React,{useState,useEffect} from 'react'
import '../CSS/BlogPostCSS.css';
import { useSelector } from 'react-redux';
import LoadingSign from './LoadingSign';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom'
import image from '../Resources/noimage.png'
const BlogPostPage = () => {
  const userId = useSelector(state=>state.authentication.userId);
  const [postId, setPostId] = useState(null)
  const [isFetching, setIsFetching] = useState(false);
  const [error,setError] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [result,setResult] = useState({title:"",authorName:"",content:"",createdDate:"",postId:"",imageBase64:"",authorId:""});
  const param = useParams();
  const userLink=`/users/${result.authorId}`;
  useEffect(() => {
    const fetchData = () => {
      setIsFetching(true);
      axios.get(`https://theadventure-travelblog.herokuapp.com/api/v1/posts/${param.blogId}`)
              .then((res)=>{
                if(res.data.authorId===userId){
                  setIsOwner(true);
                }
                setResult(res.data);
              })
              .catch((err)=>{
                setError(err.response.data.message);
              })
      setIsFetching(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {(isFetching || result.imageBase64==="" ) && <LoadingSign/>} 
      {!isFetching && <div className='blog-post-main'>
        <h1>{result.title}</h1>
        {result.imageBase64!==null 
          ? <img src={ result.imageBase64} alt=""/> 
          : <div className="blog-post-no-image-div"><img src={image} alt=""/></div>}
        <div className="blog-post-main-auth-date">
          <h4><Link to={userLink} style={{textDecoration:'none',color:'#ffa40c'}}>{result.authorName}</Link></h4>
          <h4>{result.createdDate.substring(0, 10)}</h4>
        </div>
        <h3>{result.content}</h3>
      </div>} 
      
    </div>
  )
}

export default BlogPostPage