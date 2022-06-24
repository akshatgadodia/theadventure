import React from 'react'
import '../CSS/BlogCardCSS.css';
import { Link } from 'react-router-dom';
import image from '../Resources/noimage.png'
const BlogCard = (props) => {
  const bloglink = `/blogs/${props.id}`
  return (
    <div className='blog-card-main'>
        <div className="blog-card-image">
        {props.source!==null 
          ? <img src={ props.source} alt=""/> 
          : <div className="blog-post-no-image-div"><img src={image} alt=""/></div>}
        </div>
          <h2>{props.title}</h2>
        <div className="blog-card-author">
          By {props.author}
        </div>
        <div className="blog-card-content">
          {props.content}
        </div>
          <Link to={bloglink} className='blog-card-main-link'>Read More...</Link>
    </div>
  )
}

export default BlogCard