import React from 'react'
import BlogCard from './BlogCard';
import '../CSS/BlogCSS.css';
import a1 from '../Temproary/a1.jpg';
import a2 from '../Temproary/a2.jpg';
import a3 from '../Temproary/a3.jpg';
import a4 from '../Temproary/a4.jpg';
import a5 from '../Temproary/a5.jpg';
import a6 from '../Temproary/a6.jpg';
import a7 from '../Temproary/a7.jpg';
import a8 from '../Temproary/a8.jpg';
import a9 from '../Temproary/a9.jpg';
import a10 from '../Temproary/a10.jpg';
import TitleLetterDisplay from './TitleLetterDisplay';
const Blogs = () => {
  return (
    <div className='blogs-main'>
        <div className='blog-main-title'>
                <TitleLetterDisplay letter='B'/>
                <TitleLetterDisplay letter='L'/>
                <TitleLetterDisplay letter='O'/>
                <TitleLetterDisplay letter='G'/>
        </div>
        <div className='blog-cards-display'>
            <BlogCard title="Test Blog" author="Akshat Gadodia"
                    content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore impedit cum iusto voluptate quas, reiciendis optio blanditiis, corporis quod dolor veritatis temporibus repellendus sit maxime eos hic id neque iure."
                    source={a1} id="1"
            />
           <BlogCard title="Test Blog" author="Akshat Gadodia"
                    content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore impedit cum iusto voluptate quas, reiciendis optio blanditiis, corporis quod dolor veritatis temporibus repellendus sit maxime eos hic id neque iure."
                    source={a2} id="2"
            />
            <BlogCard title="Test Blog" author="Akshat Gadodia"
                    content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore impedit cum iusto voluptate quas, reiciendis optio blanditiis, corporis quod dolor veritatis temporibus repellendus sit maxime eos hic id neque iure."
                    source={a3} id="3"
            />
            <BlogCard title="Test Blog" author="Akshat Gadodia"
                    content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore impedit cum iusto voluptate quas, reiciendis optio blanditiis, corporis quod dolor veritatis temporibus repellendus sit maxime eos hic id neque iure."
                    source={a4} id="4"
            />
            <BlogCard title="Test Blog" author="Akshat Gadodia"
                    content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore impedit cum iusto voluptate quas, reiciendis optio blanditiis, corporis quod dolor veritatis temporibus repellendus sit maxime eos hic id neque iure."
                    source={a5} id="5"
            />
            <BlogCard title="Test Blog" author="Akshat Gadodia"
                    content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore impedit cum iusto voluptate quas, reiciendis optio blanditiis, corporis quod dolor veritatis temporibus repellendus sit maxime eos hic id neque iure."
                    source={a6} id="6"
            />
            <BlogCard title="Test Blog" author="Akshat Gadodia"
                    content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore impedit cum iusto voluptate quas, reiciendis optio blanditiis, corporis quod dolor veritatis temporibus repellendus sit maxime eos hic id neque iure."
                    source={a7} id="7"
            />
            <BlogCard title="Test Blog" author="Akshat Gadodia"
                    content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore impedit cum iusto voluptate quas, reiciendis optio blanditiis, corporis quod dolor veritatis temporibus repellendus sit maxime eos hic id neque iure."
                    source={a8} id="8"
            />
            <BlogCard title="Test Blog" author="Akshat Gadodia"
                    content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore impedit cum iusto voluptate quas, reiciendis optio blanditiis, corporis quod dolor veritatis temporibus repellendus sit maxime eos hic id neque iure."
                    source={a9} id="9"
            />
            

            
        </div>
    </div>
  )
}

export default Blogs