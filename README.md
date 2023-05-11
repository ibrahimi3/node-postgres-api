# Blog CRUD API

This API allows you to perform CRUD operations (Create, Read, Update, Delete) on blog posts stored in a PostgreSQL database.

## Base URL

The base URL for this API is `http://localhost/api:PORT`. if port is default `http://localhost/api:3000` 

## Endpoints

### GET /blogs

Returns a list of all blogs in the database.

#### Example Request

GET http://localhost:3000/api/blogs

#### Example Response

HTTP/1.1 200 OK
Content-Type: application/json

```json
[
{
"id": 1,
"title": "Example blog post",
"description": "Lorem ipsum dolor sit amet",
"content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
},
{
"id": 2,
"title": "Another blog post",
"description": "Vestibulum ac est sit amet",
"content": "Vestibulum ac est sit amet lorem tristique interdum..."
}
]
```


### GET /blogs/:id

Returns a single blog with the specified ID.

#### Example Request

GET http://localhost:3000/api/blogs/1

#### Example Response

HTTP/1.1 200 OK
Content-Type: application/json

```json
{
"id": 1,
"title": "Example blog post",
"description": "Lorem ipsum dolor sit amet",
"content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
}
```

### POST /blogs

Creates a new blog post.

#### Example Request

POST http://localhost:3000/api/blogs

Content-Type: application/json
```json
{
"title": "New blog post",
"description": "Lorem ipsum dolor sit amet",
"content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
}
```

#### Example Response

Blog added with ID: 3

### PUT /blogs/:id

Updates an existing blog post with the specified ID.

#### Example Request

PUT http://localhost:3000/api/blogs/1

```json
{
"title": "New blog post",
"description": "Lorem ipsum dolor sit amet",
"content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
}
```

#### Example Response

Blog modified with ID: 1

### DELETE /blogs/:id

Deletes an existing blog post with the specified ID.

#### Example Request

DELETE http://localhost:3000/api/blogs/1

#### Example Response

Blog deleted with ID: 1