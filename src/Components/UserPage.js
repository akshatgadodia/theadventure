import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import LoadingSign from './LoadingSign';
import axios from 'axios';
import {Link, useParams,useNavigate} from 'react-router-dom'
import '../CSS/UserPageCSS.css';
import BlogCard from './BlogCard';
import TitleLetterDisplay from './TitleLetterDisplay';

export const UserPage = () => {
    const navigate = useNavigate();
    const userId = useSelector(state=>state.authentication.userId);
    const [isFetching, setIsFetching] = useState(false);
    const [error,setError] = useState(null);
    const [result,setResult] = useState({email:"",name:"",posts:null,userId:""});
    const param = useParams();

    useEffect(() => {
        const fetchData = () => {
          setIsFetching(true);
          axios.get(`https://theadventure-travelblog.herokuapp.com/api/v1/user/${param.userId}`)
                  .then((res)=>{
                    if(res.data.userId===userId){
                      navigate("/profile");
                    }
                    console.log(res.data)
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
        {(isFetching || result.userId==="" ) && <LoadingSign/>} 
        {!isFetching && <div className='user-page-main'>
        <div className='blog-main-title'>
          {[...(result.name)].map((data,index)=>{
            console.log(data)
            if(data!==" "){
              return(
                <TitleLetterDisplay key={index} letter={data}/>
            )}
            else
              {return(<TitleLetterDisplay key={index} letter={data} styleProp={{backgroundColor:'white'}}/>)}
        })
          }  
        </div>
            <div className='blog-cards-display'>
            {result.posts!==null && 
                result.posts.map((data,index)=>{
                        return(
                                <BlogCard key={index} title={data.title} author={data.authorName}
                                content={data.content} source={data.imageBase64} id={data.postId}/>
                )})
             }
        </div>
        </div>} 
    </div>
  )
}
