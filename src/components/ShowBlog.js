import React from 'react'
import blogService from '../services/blogs'
import PropTypes from 'prop-types'

// huom react inline css
const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
}


const ShowBlog = ({ blog, handleRefresh, currentUser }) => {

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

    const handleDelete = async (event) => {
        const result = window.confirm('Are you sure to delete this?');
        if (result) {
            await blogService.delet(blog.id)
            handleRefresh()
        }

    }

    if (blog.user === null) {
        return (
            <div style={blogStyle}>
                <ul>
                    <li>{blog.title}</li>
                    <li>{blog.url}</li>
                    <li>{blog.likes} likes <button onClick={handleLike}>like</button> </li>
                    <li>adder unknown</li>
                    <li><button onClick={handleDelete}>Delete</button></li>
                </ul>
            </div>
        )
    }

    if (blog.user._id === currentUser.id) {
        return (
            <div style={blogStyle}>
                <ul>
                    <li>{blog.title}</li>
                    <li>{blog.url}</li>
                    <li>{blog.likes} likes <button onClick={handleLike}>like</button> </li>
                    <li>added by {blog.user.username}</li>
                    <li><button onClick={handleDelete}>Delete</button></li>
                </ul>
            </div>
        )
    }

    return (
        <div style={blogStyle}>
            <ul>
                <li>{blog.title}</li>
                <li>{blog.url}</li>
                <li>{blog.likes} likes <button onClick={handleLike}>like</button> </li>
                <li>added by {blog.user.username}</li>
            </ul>

        </div>
    )
}

ShowBlog.propTypes = {
    handleRefresh: PropTypes.func.isRequired,
    blog: PropTypes.object.isRequired,
    currentUser: PropTypes.object.isRequired
  }


export default ShowBlog