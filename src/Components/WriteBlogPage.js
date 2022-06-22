import React,{useState}from 'react'
import '../CSS/WriteBlogPostCSS.css';
import TitleLetterDisplay from './TitleLetterDisplay';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingSign from './LoadingSign';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const WriteBlogPage = () => {
  const navigate = useNavigate();

  const token = useSelector(state=>state.authentication.token);
  const authorId = useSelector(state=>state.authentication.userId);
  const authorName = useSelector(state=>state.authentication.userName);
  const [title, setTitle] = useState(null)
  const [content, setContent] = useState(null)
  const [imageBase64,setImageBase64] = useState(null);
  const [error,setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const fileReader = new FileReader();
  fileReader.onload = function(FileLoadEvent){
    setImageBase64(FileLoadEvent.target.result);
  }
  const savePost = (event) => {
    setIsFetching(true);
    event.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer '+token,
      }
    }

    const postData = {'authorId':authorId,'authorName':authorName,'title':title,'content':content,'imageBase64':imageBase64,'createdDate': new Date()};
    console.log(postData);
    axios.post("http://192.168.29.39:8080/api/v1/posts", postData, config)
              .then((res)=>{
                console.log(res)
                navigate(`/blogs/${res.data.postId}`)
              })
              .catch((err)=>{
                setError(err.response.data.message);
              })
    setIsFetching(false);
  }
  return (
    <div className='write-main'>
      {isFetching && <LoadingSign/> }
      {!isFetching && 
      <>
        <div className='write-main-title'>
                <TitleLetterDisplay letter='W'/>
                <TitleLetterDisplay letter='R'/>
                <TitleLetterDisplay letter='I'/>
                <TitleLetterDisplay letter='T'/>
                <TitleLetterDisplay letter='E'/>
        </div>
        <form onSubmit={savePost} className="write-form">
          <input type="text" name='title' placeholder='Title' minLength="5" className='write-form-title'
                  onChange={(event)=>setTitle(event.target.value)} /><br/>
          {imageBase64!==null && <><img src={imageBase64} alt="hell"/><br/></>}
          <label htmlFor="file-input" className='write-form-image'><AddPhotoAlternateIcon fontSize='large'/></label>
          <input type="file" id="file-input" name="ImageStyle" style={{visibility:'hidden'}} 
                  onChange={(event)=>fileReader.readAsDataURL(event.target.files[0])}/><br/>
          <textarea name="content" cols="30" rows="10" placeholder='Tell Your Story...'
                   onChange={(event)=>setContent(event.target.value)}/><br/>
          <input type="submit" value='Post' className='write-form-submit'/>
        </form>
      </>
    }
    </div>
  )
}

export default WriteBlogPage