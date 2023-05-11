require('dotenv').config()

const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.PGSQL_USER,
  host: process.env.PGSQL_HOST,
  database: process.env.PGSQL_DB,
  password: process.env.PGSQL_PASSWORD,
  port: 5432,
})


const getBlogs = (request, response) => {
  pool.query('SELECT * FROM blogs ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getBlogById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM blogs WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createBlog = (request, response) => {
  const { title, description, content } = request.body

  pool.query('INSERT INTO blogs (title, description, content) VALUES ($1, $2, $3) RETURNING id', [title, description, content], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Blog added with ID: ${results.rows[0].id}`)
  })
}

const updateBlog = (request, response) => {
  const id = parseInt(request.params.id)
  const { title, description, content } = request.body

  pool.query(
    'UPDATE blogs SET title = $1, description = $2, content = $3 WHERE id = $4',
    [title, description, content, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Blog modified with ID: ${id}`)
    }
  )
}

const deleteBlog = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM blogs WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Blog deleted with ID: ${id}`)
  })
}

module.exports = {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
}