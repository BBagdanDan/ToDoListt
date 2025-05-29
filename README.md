# React To-Do List with Music Discovery

## Project Overview

This project is a React-based web application that combines a to-do list with a music discovery feature using a public music API. The app includes user registration and login, session management, and allows each user to save their to-do items and favorite music tracks in a PostgreSQL database. The backend is built with Express.js.

## Features

- **To-Do List:**
- **User Authentication:**
   -Secure user login and registration
- **Session Timeout:**
   -Automatic logout after a period of inactivity
- **Adaptive design**

## How to start?

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/BBagdanDan/ToDoList
   cd 
   ```

2. **Install dependencies**

   ```
   # Frontend
   cd client
   npm install

   # Backend
   cd ../server
   npm install
   ```
3. **Set up environment variables:**

   Create a `.env` file in the `server` directory and add the following variables:

   ```env
   PORT=5000
   DB_HOST=host
   DB_USER=username
   DB_PASSWORD=password
   DB_NAME=db_name
   JWT_SECRET=secret_key
   ```

4. **Start the backend server:**

   ```bash
   cd server
   node server.js
   ```

5. **Start the frontend development server:**

   ```bash
   cd ../client
   npm run start
   ```   

## Usage

1. **Register a new user:**

   Go to `http://localhost:3000/register` and create a new account.

2. **Login:**

   Go to `http://localhost:3000/login` and log in with your credentials.

3. **To-Do List:**

   - Add tasks
   - Edit tasks
   - Mark completed tasks
   - Delete tasks

## Project Structure

- **client:** React frontend source code
- **server:** Express.js backend source code
- **.env:** Configuration for environment variables

## API Endpoints

### Authentication

- `POST /api/register`: Register a new user
- `POST /api/login`: Login and receive a JWT token

### To-Do List

- `GET /api/todos`: Retrieve the current user’s to-do list
- `POST /api/todos`: Add a new task
- `PUT /api/todos/:id`:  Edit a task
- `DELETE /api/todos/:id`: Delete a task