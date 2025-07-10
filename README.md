# FinaleHealth

A full-stack health management application with Angular frontend, NestJS backend, and MongoDB database.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) (running locally)
- [Git](https://git-scm.com/)

---

## Installation

### 1. Clone the repository

```sh
git clone https://github.com/danilos12/FinaleHealth.git
cd FinaleHealth
```

---

### 2. Set up the backend

```sh
cd backend
npm install
```

- Create a `.env` file in the `backend` directory (if not present) and add your MongoDB connection string:
    ```
    MONGODB_URI=mongodb://localhost:27017/finalehealth
    PORT=3000
    ```
- Start the backend server:
    ```sh
    npm run start:dev
    ```
    The backend will run on [http://localhost:3000](http://localhost:3000).

---

### 3. Set up the frontend

```sh
cd ../frontend
npm install
```

- Start the Angular development server:
    ```sh
    npm start
    ```
    The frontend will run on [http://localhost:4200](http://localhost:4200).

---

### 4. Make sure MongoDB is running locally

- Start MongoDB using your preferred method (e.g., `mongod` or MongoDB Compass).
- The default database name is `finalehealth` (see `.env` above).

---

## Usage

- Open [http://localhost:4200](http://localhost:4200) in your browser.
- The app will connect to your local backend and MongoDB database.

---

## Troubleshooting

- If you get connection errors, ensure MongoDB is running and the connection string in `.env` is correct.
- If ports are in use, change the `PORT` in your `.env` or Angular config.

---
