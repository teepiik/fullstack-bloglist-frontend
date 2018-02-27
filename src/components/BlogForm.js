import React from 'react'

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

export default BlogForm