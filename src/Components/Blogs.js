import React,{useState,useEffect}  from 'react'
import BlogCard from './BlogCard';
import '../CSS/BlogCSS.css';
import LoadingSign from './LoadingSign';
import axios from 'axios';
import TitleLetterDisplay from './TitleLetterDisplay';

const Blogs = () => {
        const [isFetching, setIsFetching] = useState(true);
        const [result,setResult] = useState([]);
        const [error,setError] = useState(null);
        useEffect(() => {
                const fetchData = () => {
                  axios.get(`https://theadventure-travelblog.herokuapp.com/api/v1/posts/`)
                          .then((res)=>{
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
    <div className='blogs-main'>
        <div className='blog-main-title'>
                <TitleLetterDisplay letter='B'/>
                <TitleLetterDisplay letter='L'/>
                <TitleLetterDisplay letter='O'/>
                <TitleLetterDisplay letter='G'/>
                <TitleLetterDisplay letter='S'/>
        </div>
        <div className='blog-cards-display'>
             {(isFetching) && <LoadingSign/>}
             {!isFetching && 
                result.map((data,index)=>{
                        return(
                                <BlogCard key={index} title={data.title} author={data.authorName}
                                content={data.content} source={data.imageBase64} id={data.postId}/>
                )})
             }
        </div>
    </div>
  )
}

export default Blogs