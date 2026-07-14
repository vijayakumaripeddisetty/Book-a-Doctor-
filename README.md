# 🩺 Book a Doctor – Online Doctor Appointment Management System

A full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** web application that enables patients to search for doctors, book appointments, manage consultations, maintain medical records, and receive healthcare services through a secure and user-friendly platform.

---

# 📖 Overview

**Book a Doctor** is designed to simplify the healthcare appointment process by allowing patients to search for doctors based on specialization, schedule appointments, manage bookings, receive notifications, and maintain their medical records online. Doctors can manage their schedules, view appointments, update consultation details, and communicate with patients.

The project follows the **Model-View-Controller (MVC)** architecture, providing a clean, modular, scalable, and maintainable codebase.

---

# 🚀 Features

## 👤 User Management

* User Registration
* User Login
* JWT Authentication
* Profile Management
* Change Password
* Forgot Password

## 👨‍⚕️ Doctor Management

* Doctor Registration
* Doctor Login
* Doctor Profile Management
* Specialization Management
* Availability Scheduling
* Appointment Management
* Consultation History

## 📅 Appointment Management

* Search Doctors
* Filter by Specialization
* Book Appointment
* Cancel Appointment
* Reschedule Appointment
* Appointment Status Tracking
* Appointment History

## 🏥 Healthcare Services

* Patient Medical Records
* Prescription Management
* Consultation Notes
* Health Report Upload
* Online Consultation Support
* Patient Feedback & Ratings

## 📊 Dashboard

### Patient Dashboard

* Upcoming Appointments
* Appointment History
* Medical Records
* Prescriptions
* Notifications

### Doctor Dashboard

* Today's Appointments
* Patient List
* Consultation Records
* Availability Calendar
* Earnings Summary

---

# 🔒 Security

* JWT Authentication
* Password Encryption using bcryptjs
* Protected Routes
* Role-Based Access Control
* Environment Variables
* Input Validation

---

# 🛠 Technology Stack

## Frontend

* React.js
* Vite
* Bootstrap
* Axios
* React Router DOM
* HTML5
* CSS3
* JavaScript

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* dotenv
* CORS
* Multer (File Upload)

---

# 🏗 Project Architecture

```text
Book-a-Doctor
│
├── client
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── uploads
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/your-username/Book-a-Doctor.git
```

Navigate to the project directory.

```bash
cd Book-a-Doctor
```

---

## 📦 Install Frontend Dependencies

```bash
cd client
npm install
```

---

## 📦 Install Backend Dependencies

Open another terminal.

```bash
cd server
npm install
```

---

## 🗄 Configure MongoDB

Create a `.env` file inside the **server** folder.

```env
MONGO_URI=mongodb://127.0.0.1:27017/BookDoctor

PORT=5000

JWT_SECRET=yourSecretKey
```

---

# ▶ Running the Application

## Start Backend

```bash
cd server

npm run dev
```

or

```bash
node server.js
```

---

## Start Frontend

```bash
cd client

npm run dev
```

---

# 🌐 Application URLs

## Frontend

```
http://localhost:5173
```

## Backend

```
http://localhost:5000
```

## MongoDB

```
mongodb://127.0.0.1:27017
```

---

# 🔄 Application Workflow

```text
Patient / Doctor
        │
        ▼
React Frontend
        │
        ▼
Axios API Calls
        │
        ▼
Express REST APIs
        │
        ▼
Controllers
        │
        ▼
Mongoose Models
        │
        ▼
MongoDB Database
        │
        ▼
JSON Response
        │
        ▼
React UI Updates
```

---

# 📁 Folder Structure

## Client

```text
assets/
components/
pages/
services/
App.jsx
main.jsx
```

## Server

```text
config/
controllers/
middleware/
models/
routes/
uploads/
server.js
```

---

# 📌 Main Modules

* User Authentication
* Doctor Registration
* Doctor Listing
* Search Doctors
* Appointment Booking
* Appointment Scheduling
* Patient Dashboard
* Doctor Dashboard
* Prescription Management
* Medical Records
* Notifications
* Profile Management

---

# 🔒 Security Features

* JWT Authentication
* Password Hashing using bcryptjs
* Protected API Routes
* Role-Based Authentication
* Environment Variables
* Input Validation
* Secure File Uploads

---

# 🚀 Future Enhancements

* AI-Based Doctor Recommendation
* Video Consultation
* Online Payment Gateway
* E-Prescription Generation
* Lab Test Booking
* Pharmacy Integration
* Ambulance Booking
* Health Insurance Integration
* Mobile Application
* Push Notifications
* Voice Assistant Support

---

# 📚 Documentation

The repository contains detailed documentation for every development stage:

* Project Setup
* User Flow
* MVC Pattern
* Technical Architecture
* Frontend Structure
* Backend Structure
* Configure MongoDB
* Create Database Connection
* Create Schemas and Models
* REST API Documentation
* Authentication Flow
* Appointment Workflow
* Development Guide
* Steps for Execution

---

# 🎯 Expected Outcome

The **Book a Doctor** application enables patients to conveniently search for doctors, schedule appointments, manage consultations, maintain medical records, and receive quality healthcare services online. Doctors can efficiently organize appointments, manage patient information, and provide a better healthcare experience. The MERN Stack architecture ensures a scalable, secure, and maintainable full-stack healthcare management system.

---

# 👨‍💻 Authors

* PEDDISETTY VIJAYAKUMARI
* PUVVULA KISHAN
* KOTHA MANOHAR
* PAGOLU NAGA DILEEP
* SHAIK SIDDIK



---

# 📄 License

This project is developed for educational and learning purposes as part of a **MERN Stack Full-Stack Development Project**.

---

# ⭐ Support

If you found this project useful, consider giving it a **⭐ Star** on GitHub!
