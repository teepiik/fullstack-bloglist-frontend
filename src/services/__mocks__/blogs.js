let token = null

const blogs = [
    {
        id:"43abc",
        title: "Titteli 1",
        author: "teemu",
        url: "www.wwe.fi",
        likes: 4,
        user: {
            _id: "12345",
            username: "teme",
            name: "teemu"
        }
    },
    {
        id:"1111111",
        title: "Title 2",
        author: "marko",
        url: "www.hupsis.net",
        likes: 0,
        user: {
            _id: "99999",
            username: "bengal",
            name: "ben"
        }
    }
]

const getAll = () => {
    return Promise.resolve(blogs)
  }
  
  export default { getAll, blogs }
