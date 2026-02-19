# 📌 Todo App – Backend API

A RESTful backend API for managing user authentication and tasks.  
Built using **Node.js, Express, MongoDB, and Mongoose**.


---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT Authentication
- dotenv

---

## 📂 Project Structure

backend/
│
├── src/
│   ├── config/        # Database configuration
│   ├── controllers/   # Route controllers
│   ├── middlewares/   # Auth middleware
│   ├── models/        # Mongoose schemas
│   ├── routes/        # API routes
│   └── services/      # Business logic
│
├── app.js
├── package.json
└── .env

---


# 📌 API Endpoints

## 🔐 Authentication Routes

| Method | Endpoint               | Description        | Auth Required |
|--------|------------------------|--------------------|--------------|
| POST   | /api/auth/register     | Register new user  | ❌ No |
| POST   | /api/auth/login        | Login user         | ❌ No |

---

## 📝 Task Routes

(All routes below require JWT token)

| Method | Endpoint                     | Description                      | Auth Required |
|--------|------------------------------|----------------------------------|--------------|
| POST   | /api/tasks                   | Create a new task                | ✅ Yes |
| GET    | /api/tasks                   | Get all tasks                    | ✅ Yes |
| GET    | /api/tasks?sort=deadline     | Get tasks sorted by deadline     | ✅ Yes |
| GET    | /api/tasks?sort=priority     | Get tasks sorted by priority     | ✅ Yes |
| GET    | /api/tasks?sort=created      | Get tasks sorted by created date | ✅ Yes |
| GET    | /api/tasks?sort=mixed        | Custom mixed sorting             | ✅ Yes |
| GET    | /api/tasks/:id               | Get single task by ID            | ✅ Yes |
| PUT    | /api/tasks/:id               | Update a task                    | ✅ Yes |
| PATCH  | /api/tasks/:id/toggle        | Toggle task completion           | ✅ Yes |
| DELETE | /api/tasks/:id               | Delete a task                    | ✅ Yes |

---

## 🔑 Authorization Header Format

All protected routes require:

Authorization: Bearer <your_jwt_token>

---

# 🧠 Features

- 🔐 JWT Authentication  
- 🛡 Protected Routes  
- 👤 User-Based Task Ownership  
- 🔄 Sorting Support (deadline, priority, created, mixed)  
- ⚡ Compound Indexing for Optimized Queries  
- 🏗 MVC Architecture  
- 🧩 Service Layer Separation  
- 📈 Clean & Scalable Project Structure  




