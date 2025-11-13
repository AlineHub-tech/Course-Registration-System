A Full-Stack Course Registration System built with Node.js, Express, MongoDB, and React.js.
It allows admins to manage students, courses, and their registrations in a modern dashboard.
The system ensures data integrity, authentication, and smooth user experience.

 Features

✅ User Authentication & Authorization

Secure login/signup using JWT

Passwords hashed with bcryptjs

Admin: full CRUD on students, courses, and registrations

Normal User (student): can only view available courses and their registrations


✅ Student Management

Add, edit, delete, and view student details

Validate names, emails, and phone numbers

Paginated and searchable student list


✅ Course Management

Add, update, or delete courses with details like code and duration

View all available courses with pagination and search


✅ Course Registration

Register a student for a course

Prevent duplicate registrations

Show all registrations with JOIN-like aggregation to display both student and course names


✅ Error Handling & Validation

Centralized error handling middleware

Validation on all API inputs (no empty fields, valid email format)


✅ Professional Dashboard UI

Sidebar navigation

Table views for students, courses, and registrations

Search bar, pagination, and action buttons

Clean React-based UI with CSS styling

 Tech Stack

Backend

Node.js – JavaScript runtime

Express.js – Web framework

MongoDB Atlas – Cloud database

Mongoose – ODM for schema modeling

bcryptjs – Password encryption

jsonwebtoken – Token-based authentication

dotenv – Environment configuration

express-validator – Input validation

cors – Handle cross-origin requests


Frontend

React.js – Frontend framework

Axios – API communication

React Router DOM – Navigation between pages

CSS3 – Styling and responsiveness

 How It Works

1. Admin login/signup using JWT.


2. Once logged in, admin can:

Manage students (CRUD)

Manage courses (CRUD)

Register students in courses



3. Students can log in and view their registered courses.


4. All APIs return JSON responses for easy Postman testing.


5. Data stored securely in MongoDB Atlas.

 Installation & Setup

Backend Setup

cd backend
npm install
npm run dev

Create .env file in backend/:

MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/yourDB?retryWrites=true&w=majority
JWT_SECRET=any_secret_key
PORT=5000

Frontend Setup

cd frontend
npm install
npm start

Frontend: http://localhost:5000
Backend: http://localhost:5000
 API Testing

Use Postman to test all routes.
Each CRUD endpoint returns clean JSON for easy integration.







---

Aline, ubu iyi README.md ni professional, irimo byose — technical stack, explanation, usage, setup, structure, and author info.
Ushaka ko nyongeramo badges (GitHub badges nka “Made with Node.js”, “License”, “Version”, n’andi make up aesthetic)?
