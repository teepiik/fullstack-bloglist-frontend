import React from 'react'

// huom react inline css
const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

const ShowBlog = ({ blog, adder }) => {

    // huom. lisääjä näkyy vasta kun blogi on ladattu uudestaan tietokannasta. Heti lisäyksen
    // jälkeen näyttää tyhjää.
    return (
        <div style={blogStyle}>
           <ul>
               <li>{blog.title}</li>
               <li>{blog.url}</li>
               <li>{blog.likes} likes <button onClick={console.log('plus 1')}>like</button> </li>
               <li>added by {adder}</li>
           </ul>
    
        </div>
    )
}

export default ShowBlog