For test the API
Run => https://blog-post-project-backend.vercel.app/api/v1/ReadBlog
======================================================================
This is a simple Blog API built with **Node.js** and **Express.js**. It provides user authentication and CRUD operations for managing blog posts.

## Features

- **User Registration & Login** via email and OTP
- **Blog Management**:
  - Create a blog post
  - Read all blog posts
  - Edit a blog post
  - Delete a blog post
- **Authentication** middleware to protect sensitive routes

## Tech Stack

- Node.js
- Express.js
- JWT / Custom Auth Middleware (AuthVerification)
- MongoDB (optional, depending on your controllers)
- ES Modules (`import/export` syntax)

## API Endpoints

### User

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET    | `/UserRegistration/:email` | Register a new user with email |
| GET    | `/UserLogin/:email/:otp` | Login user with email and OTP |

### Blog

> **Note:** Blog routes require authentication via `AuthVerification` middleware for creating, editing, and deleting posts.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST   | `/CreateBlog` | Create a new blog post |
| GET    | `/ReadBlog` | Read all blog posts |
| PUT    | `/EditBlog/:blogId` | Edit a blog post by ID |
| DELETE | `/DeleteBlog/:blogId` | Delete a blog post by ID |

## Middleware

- **AuthVerification**: Ensures that the user is authenticated before accessing protected routes.

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
