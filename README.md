# ve3
# Task Management API

## Project Setup Instructions

### Prerequisites

- **Node.js** (v16 or later)
- **MongoDB** (Ensure MongoDB is installed and running locally or use a cloud database like MongoDB Atlas)
- **Postman** (for API testing, optional but recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/opyash218/ve3.git
   cd task-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   
   MONGODB_URL=<your_mongodb_connection_string> or u can use cloud mongodb://<your_mongodb_connection_string
   JWT_SECRET=<your_jwt_secret>
   PORT=5000
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

   The server will run on `http://localhost:5000` by default.

---

## API Endpoints and Usage

### Authentication Endpoints

#### 1. **Register a New User**

- **Endpoint:** `POST /auth/register`
- **Request Body:**
  ```json
  {
    "username": "testuser",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully"
  }
  ```

#### 2. **Log In to Get a JWT Token**

- **Endpoint:** `POST /auth/login`
- **Request Body:**
  ```json
  {
    "username": "testuser",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "token": "your_jwt_token_here"
  }
  ```

---

### Task Endpoints

#### 1. **Fetch All Tasks**

- **Endpoint:** `GET /tasks`
- **Headers:**
  ```plaintext
  Authorization: Bearer <your_jwt_token>
  ```
- **Response:**
  ```json
  [
    {
      "_id": "task_id",
      "title": "Task 1",
      "description": "This is the first task",
      "completed": false,
      "createdAt": "2024-04-01T10:00:00Z",
      "updatedAt": "2024-04-01T10:00:00Z"
    }
  ]
  ```

#### 2. **Fetch a Task by ID**

- **Endpoint:** `GET /tasks/:id`
- **Headers:**
  ```plaintext
  Authorization: Bearer <your_jwt_token>
  ```
- **Response:**
  ```json
  {
    "_id": "task_id",
    "title": "Task 1",
    "description": "This is the first task",
    "completed": false,
    "createdAt": "2024-04-01T10:00:00Z",
    "updatedAt": "2024-04-01T10:00:00Z"
  }
  ```

#### 3. **Create a New Task**

- **Endpoint:** `POST /tasks`
- **Headers:**
  ```plaintext
  Authorization: Bearer <your_jwt_token>
  ```
- **Request Body:**
  ```json
  {
    "title": "New Task",
    "description": "This is a new task"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "new_task_id",
    "title": "New Task",
    "description": "This is a new task",
    "completed": false,
    "createdAt": "2024-04-01T11:00:00Z",
    "updatedAt": "2024-04-01T11:00:00Z"
  }
  ```

#### 4. **Update a Task**

- **Endpoint:** `PUT /tasks/:id`
- **Headers:**
  ```plaintext
  Authorization: Bearer <your_jwt_token>
  ```
- **Request Body:**
  ```json
  {
    "title": "Updated Task",
    "description": "This task has been updated",
    "completed": true
  }
  ```
- **Response:**
  ```json
  {
    "_id": "task_id",
    "title": "Updated Task",
    "description": "This task has been updated",
    "completed": true,
    "createdAt": "2024-04-01T11:00:00Z",
    "updatedAt": "2024-04-01T12:00:00Z"
  }
  ```

#### 5. **Delete a Task**

- **Endpoint:** `DELETE /tasks/:id`
- **Headers:**
  ```plaintext
  Authorization: Bearer <your_jwt_token>
  ```
- **Response:**
  ```json
  {
    "message": "Task deleted"
  }
  ```





