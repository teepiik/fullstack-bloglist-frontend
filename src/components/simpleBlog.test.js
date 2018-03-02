import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './simpleBlog'

describe.only('<SimpleBlog />', () => {
  it('renders title, author and likes', () => {
    const blog = {
      title: 'Simppeli blogi',
      author: "teemu",
      likes: 2
    }

    const simpleBlogComponent = shallow(<SimpleBlog blog={blog} />)

    const titleDiv = simpleBlogComponent.find('.title')
    const likesDiv = simpleBlogComponent.find('.likes')

    expect(titleDiv.text()).toContain(blog.title)
    expect(titleDiv.text()).toContain(blog.author)
    expect(likesDiv.text()).toContain(blog.likes)
  })

  it('calls like-buttonHandler twice', () => {
    const blog = {
      title: 'Simppeli blogi',
      author: "teemu",
      likes: 2
    }
    const mockHandler = jest.fn()

    const simpleBlogComponent = shallow(
        <SimpleBlog
          blog={blog}
          onClick={mockHandler}
        />
      )
    
      const button = simpleBlogComponent.find('button')
      button.simulate('click')
      button.simulate('click')
    
      expect(mockHandler.mock.calls.length).toBe(2)
  })
})