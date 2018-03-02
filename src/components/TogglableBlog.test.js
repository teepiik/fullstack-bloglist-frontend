import React from 'react'
import { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Blog from './ShowBlog'
import TogglableBlog from './TogglableBlog'

describe('<TogglableBlog />', () => {

/*
    HUOM! Tämä tehtävä on tehty hieman eri tavalla kuin oli tarkoitus
*/


    it('Rendering shows right content for hideContent and showContent div', () => {

        const blog = {
            title: "TestTitle",
            author: "Authortest",
            url: "url.test",
            likes: "45",
            user: {
                name: "teemu",
                username: "teme"
            }
        }

        const user = {
            id: 1,
            name: "teemu",
            username: "teme"
        }

        let togglableComponent = mount(
            <TogglableBlog buttonLabel="show">
                <Blog blog={blog} currentUser={user}/>
            </TogglableBlog>
        )
        let div = togglableComponent.find('.hideContent')
        expect(div.text()).not.toContain(blog.url)
        expect(div.text()).not.toContain(blog.author)
        expect(div.text()).not.toContain(blog.likes)


        // Buttonilla ei väliä koska mount renderöi ilmeisesti kaiken kuitenkin
        //const button = togglableComponent.find('button')
        //button.at(0).simulate('click')

        div = togglableComponent.find('.showContent')
        expect(div.text()).toContain(blog.url)
        expect(div.text()).toContain(blog.author)
        expect(div.text()).toContain(blog.likes)
 


    })

})