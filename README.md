# Todo App (React + Laravel)

## Project Overview

This is a full-stack Todo application built with **React.js** for the frontend and **Laravel** for the backend. It demonstrates CRUD operations (Create, Read, Update, Delete), authentication using Laravel Sanctum, API communication, and mobile responsive design.

---

## Features

* User registration and login with authentication
* Add, edit, and delete todos
* Mark todos as completed
* Mobile responsive UI
* API communication with Laravel backend
* Protected routes for authenticated users
* Context API for global state management

---

## Tech Stack

**Frontend:** React.js, Axios, React Router, Context API, Tailwind CSS (optional)

**Backend:** Laravel 12, Sanctum, MySQL/PostgreSQL

**Tools:** Vite, npm, Composer, XAMPP/Laragon/MAMP

---

## Installation & Setup

### Backend (Laravel)

1. Clone the repository:

```bash
git clone <backend-repo-url>
cd todo-backend
```

2. Install dependencies:

```bash
composer install
```

3. Copy `.env.example` to `.env` and configure database

```bash
cp .env.example .env
php artisan key:generate
```

4. Run migrations:

```bash
php artisan migrate
```

5. Start Laravel server:

```bash
php artisan serve
```

### Frontend (React)

1. Navigate to frontend folder:

```bash
cd todo-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Configure API URL in `.env`

```
VITE_API_URL=http://localhost:8000/api
```

4. Start React development server:

```bash
npm run dev
```

---

## Usage

1. Open the frontend URL (usually `http://localhost:5173`)
2. Register a new user or login
3. Add, update, delete, and manage your todos
4. Logout when done

---

## Folder Structure

```
backend/ (Laravel)
├── app/
├── database/
├── routes/
│   ├── web.php
│   └── api.php
frontend/ (React)
├── src/
│   ├── api/ (axios instance)
│   ├── components/ (UI components)
│   ├── pages/ (Login, Todos)
│   ├── hooks/ (custom hooks)
│   └── context/ (AuthContext)
```

---

## API Endpoints (Laravel)

* `POST /api/register` - Register new user
* `POST /api/login` - Login user and get token
* `GET /api/todos` - Get list of todos (authenticated)
* `POST /api/todos` - Create new todo
* `PUT /api/todos/{id}` - Update todo
* `DELETE /api/todos/{id}` - Delete todo
* `POST /api/logout` - Logout user

---

## Technologies / Libraries Used

* React.js
* React Router
* Axios
* Tailwind CSS (optional)
* Laravel 12
* Laravel Sanctum
* MySQL

---

## License

This project is licensed under the MIT License.
