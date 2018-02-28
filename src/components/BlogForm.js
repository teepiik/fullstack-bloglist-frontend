import React from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({ onSubmit, handleChange, newBlogTitle, newBlogAuthor, newBlogUrl }) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    title
                    <input
                        type="text"
                        name="newBlogTitle"
                        value={newBlogTitle}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    author
                    <input
                        type="text"
                        name="newBlogAuthor"
                        value={newBlogAuthor}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    url
                    <input
                        type="text"
                        name="newBlogUrl"
                        value={newBlogUrl}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

BlogForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    newBlogTitle: PropTypes.string.isRequired,
    newBlogAuthor: PropTypes.string.isRequired,
    newBlogUrl: PropTypes.string.isRequired
  }

export default BlogForm