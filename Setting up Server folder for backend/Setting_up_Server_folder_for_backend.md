# Setting Up Server Folder for Backend

## Objective

Set up the backend of the **Book a Doctor App** using **Node.js** and **Express.js**. The backend will handle user authentication, doctor management, appointment scheduling, database operations, and API services.

---

## Prerequisites

Before proceeding, ensure that the following are installed on your system:

- Node.js (LTS Version)
- npm (Node Package Manager)
- Visual Studio Code

---

## Steps

### 1. Open the Server Folder

Open the **server** folder in the Visual Studio Code terminal.

```bash
cd server
```

---

### 2. Initialize the Node.js Project

Run the following command to create a `package.json` file.

```bash
npm init -y
```

---

### 3. Create the Main Server File

Create the following file inside the **server** folder.

```
server.js
```

---

### 4. Create the Project Folders

Create the following folders inside the **server** directory.

```
controllers/
models/
routes/
config/
middleware/
```

---

### 5. Install Required Packages

Install the required dependencies.

```bash
npm install express mongoose dotenv cors bcryptjs jsonwebtoken multer nodemon
```

---

### 6. Project Structure

After completing the setup, the **server** folder should have the following structure:

```text
server/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── node_modules/
├── .env
├── package.json
├── package-lock.json
└── server.js
```

---

## Folder Description

### config/

Contains configuration files such as the MongoDB database connection.

### controllers/

Contains the business logic for handling requests related to users, doctors, and appointments.

### middleware/

Contains middleware functions such as authentication, authorization, error handling, and file uploads.

### models/

Contains MongoDB schemas for the application's entities, including:

- Users
- Doctors
- Appointments

### routes/

Contains Express route definitions that map API endpoints to controller functions.

### server.js

The entry point of the backend application. It initializes the Express server, connects to MongoDB, configures middleware, and registers API routes.

---

## Running the Backend Server

To start the backend server, run:

```bash
node server.js
```

If **Nodemon** is installed, you can use:

```bash
npx nodemon server.js
```

or add the following script to `package.json`:

```json
"scripts": {
  "start": "node server.js",
  "server": "nodemon server.js"
}
```

Then start the server with:

```bash
npm run server
```

---

## Outcome

The backend folder is now configured with **Node.js** and **Express.js**. The project structure is organized to support RESTful APIs, MongoDB integration, user authentication, doctor management, appointment scheduling, document uploads, and other backend services required for the **Book a Doctor App**.
