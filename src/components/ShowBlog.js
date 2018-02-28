import React from 'react'
import blogService from '../services/blogs'

// huom react inline css
const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }


const ShowBlog = ({ blog, adder, handleRefresh}) => {

    const handleLike = async (event) => {

        const updatedBlog = {
            title: blog.title,
            author: blog.author,
            url: blog.url,
            likes: blog.likes + 1,
            user: blog.user
        }
        await blogService.update(blog.id, updatedBlog)   
        handleRefresh()
    }

    
    return (
        <div style={blogStyle}>
           <ul>
               <li>{blog.title}</li>
               <li>{blog.url}</li>
               <li>{blog.likes} likes <button onClick={handleLike}>like</button> </li>
               <li>added by {adder}</li>
           </ul>
    
        </div>
    )
}

export default ShowBlog