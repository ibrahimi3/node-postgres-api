const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
require('dotenv').config()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.get('/api/blogs', db.getBlogs)
app.get('/api/blogs/:id', db.getBlogById)
app.post('/api/blogs', db.createBlog)
app.put('/api/blogs/:id', db.updateBlog)
app.delete('/api/blogs/:id', db.deleteBlog)


app.listen(process.env.PORT, () => {
    //console.log(`App running on port ${process.env.PORT}.`)
})