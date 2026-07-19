# Setting Up Client Folder for Frontend

## Objective

Set up the frontend of the **Book a Doctor App** using **React** and **Vite**. This frontend will provide the user interface for patients, doctors, and administrators to interact with the application.

---

## Prerequisites

Before proceeding, ensure that the following are installed on your system:

- Node.js (LTS Version)
- npm (Node Package Manager)
- Visual Studio Code

---

## Steps

### 1. Open the Client Folder

Open the **client** folder in the Visual Studio Code terminal.

```bash
cd client
```

---

### 2. Create a React Project Using Vite

Run the following command to initialize a new React project inside the client folder.

```bash
npm create vite@latest . -- --template react
```

---

### 3. Select the Framework

When prompted, select the following framework:

```
React
```

---

### 4. Select the Variant

Choose the following JavaScript variant:

```
JavaScript
```

> **Note:** If you prefer TypeScript, you can select the TypeScript variant instead.

---

### 5. Install Project Dependencies

Install all the required packages.

```bash
npm install
```

---

### 6. Start the Development Server

Run the following command to start the React development server.

```bash
npm run dev
```

---

### 7. Verify the Application

After running the development server, Vite will display a local URL similar to the following:

```text
Local: http://localhost:5173/
```

Open the URL in your web browser. If the React welcome page appears, the frontend setup has been completed successfully.

---

## Project Structure

After the setup, the **client** folder should look similar to the following:

```text
client/
│
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── assets/
│   └── index.css
├── package.json
├── package-lock.json
├── vite.config.js
└── index.html
```

---

## Outcome

The **client** folder is now configured with **React** and **Vite**. The frontend environment is ready for developing the **Book a Doctor App**, including features such as user authentication, doctor browsing, appointment booking, document uploads, notifications, and dashboards.
