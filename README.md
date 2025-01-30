# taskmanagement
# RESTful API with Node.js, Express.js, and MongoDB

## Project Overview
This project is a RESTful API built using Node.js, Express.js, and MongoDB. It provides various endpoints for managing resources through CRUD (Create, Read, Update, Delete) operations.

## Features
- RESTful architecture
- CRUD operations
- Express.js for handling routes
- MongoDB as the database
- Mongoose for database modeling
- Error handling and validation
- Environment configuration using dotenv

## Technologies Used
- **Node.js**: JavaScript runtime for backend development
- **Express.js**: Lightweight framework for building APIs
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: ODM library for MongoDB interaction
- **Dotenv**: For environment variable management
- **Nodemon**: For development mode auto-reloading

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Udayyadla/taskmanagement
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3010
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the server:
   ```bash
   npm start
   ```
   For development mode with auto-reload:
   ```bash
   npm run dev
   ```
## deployed link 
```
https://taskmanagement-njyw.onrender.com

```
## API Endpoints
| Method | Endpoint       | Description |
|--------|--------------|-------------|
| GET    | /getAll    | Get all tasks |
| GET    | /getById/:id | Get  task by ID |
| POST   | /create    | Create a new task |
| PUT    | /update/:id | Update a task |
| DELETE | /delete/:id | Delete a task |

## Folder Structure
```
project-folder/
│-- src/
│   │-- models/       # Mongoose models
│   │-- routes/       # API route handlers
│   │-- controllers/  # Business logic
│   │-- config/       # Database connection
│   │-- index.js        # Express app setup
│-- .env              # Environment variables
│-- package.json      # Dependencies & scripts
│-- README.md         # Project documentation
```

## Dependencies
- Express.js
- Mongoose
- Dotenv
- Nodemon (for development)




