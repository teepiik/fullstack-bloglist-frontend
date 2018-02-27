import React from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Notification from './components/Notification'
import Togglable from './components/Toggleable'
import BlogForm from './components/BlogForm'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      newBlogTitle: '',
      newBlogAuthor: '',
      newBlogUrl: '',
      error: null,
      success: null,
      username: '',
      password: '',
      user: null
    }
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )

    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({ user })
      blogService.setToken(user.token)
    }
  }

  addBlog = async (event) => {
    event.preventDefault()
    const blogObject = {
      title: this.state.newBlogTitle,
      author: this.state.newBlogAuthor,
      url: this.state.newBlogUrl
    }
    this.blogForm.toggleVisibility()

    const newBlog = await blogService.create(blogObject)
    this.setState({
      blogs: this.state.blogs.concat(newBlog),
      newBlogTitle: '',
      newBlogAuthor: '',
      newBlogUrl: '',
      success: 'New blog created'
    })
    setTimeout(() => {
      this.setState({ success: null })
    }, 5000)
  }

  // use this for create blog too
  handleLoginFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  login = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })

      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      blogService.setToken(user.token)
      this.setState({ username: '', success: 'Login successfully', password: '', user })
      setTimeout(() => {
        this.setState({ success: null })
      }, 5000)
    } catch (exception) {
      this.setState({
        error: 'wrong username or password',
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }

  logout = (event) => {
    this.setState(this.user = null)
    window.localStorage.clear()
  }

  render() {

    const blogForm = () => (
      <Togglable buttonLabel="create" ref={component => this.blogForm = component}>
        <BlogForm
          onSubmit={this.addBlog}
          newBlogTitle={this.state.newBlogTitle}
          newBlogAuthor={this.state.newBlogAuthor}
          newBlogUrl={this.state.newBlogUrl}
          handleChange={this.handleLoginFieldChange}
          visible={this.state.visible}
        />
      </Togglable>
    )

    if (this.state.user === null) {
      return (
        <div>
          <Notification message={this.state.error} />
          <Notification message={this.state.success} />

          <h2>Login</h2>
          <form onSubmit={this.login}>
            <div>
              username
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleLoginFieldChange}
              />
            </div>
            <div>
              password
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleLoginFieldChange}
              />
            </div>
            <button type="submit">login</button>
          </form>
        </div>
      )
    }

    return (
      <div>
        <Notification message={this.state.error} />
        <Notification message={this.state.success} />
        <h2>blogs</h2>
        <p>{this.state.user.username} is logged in
          <button onClick={this.logout}>
            Logout
          </button></p>
        {this.state.blogs.map(blog =>
          <Blog key={blog._id} blog={blog} />
        )}
        <h2>Add new blog</h2>
        {blogForm()}
      </div>
    );
  }
}

export default App;
