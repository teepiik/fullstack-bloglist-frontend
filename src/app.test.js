import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/ShowBlog'
import TogglableBlog from './components/TogglableBlog'
jest.mock('./services/blogs')
import blogService from './services/blogs'

describe.only('<App />', () => {

    describe('when user is not logged', () => {
        let app
        beforeEach(() => {
            app = mount(<App />)
        })

        it('only login form is rendered', () => {
            app.update()
            expect(app.text()).toContain('login')
            expect(app.text()).not.toContain('blogs')
        })
    })
})