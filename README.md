# COMP3123 Assignment 2 - Employee Management System

This project is a full-stack application developed to manage employees using a **Node.js** backend with **MongoDB** and a **frontend interface** for seamless interaction. It supports CRUD operations (Create, Read, Update, Delete) for managing employee data.

---

## **Project Features**
1. Backend RESTful APIs for managing employee data.
2. Frontend interface for interacting with the backend.
3. MongoDB database for storing employee information.
4. Input validation and error handling on both backend and frontend.

---

## **Folder Structure**
```
COMP3123_Assignment2_Submission/
│
├── app.js               # Entry point for the backend application
├── package.json         # Backend dependencies
├── package-lock.json    # Lock file for backend dependencies
├── README.md            # Documentation
├── Postman_Collection.json  # Postman collection for API testing
│
├── routes/              # Backend API routes
│   ├── employeeRoutes.js
│
├── models/              # MongoDB models for the backend
│   ├── Employee.js
│
├── frontend/            # Frontend files for the project
│   ├── index.html       # Main HTML file
│   ├── style.css        # Styling for the frontend
│   ├── script.js        # JavaScript for handling frontend interactions
```

---

## **Backend Setup**
### Step 1: Install Dependencies
Navigate to the project folder and run:
```bash
npm install
```

### Step 2: Start MongoDB
Ensure MongoDB is running on your system. If installed locally, you can start it with:
```bash
mongod
```

### Step 3: Start the Server
Run the application:
```bash
node app.js
```
You should see:
```
Server running on port 3000
Connected to MongoDB
```

---

## **Frontend Setup**
### Step 1: Open the `frontend` folder
Double-click on `index.html` to open it in your default web browser.

### Step 2: Test CRUD Operations
1. Use the form to add new employees.
2. View the list of employees dynamically.
3. Use Postman to test advanced operations like updating or deleting an employee.

---

## **Postman API Testing**
Import the `Postman_Collection.json` file into Postman to test the backend APIs.

### Available Endpoints:
- **POST**: Create an Employee  
  URL: `http://localhost:3000/api/v1/emp/employees`  
  Body (JSON):
  ```json
  {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "position": "Developer",
    "salary": 70000,
    "date_of_joining": "2023-01-01",
    "department": "IT"
  }
  ```

- **GET**: Retrieve All Employees  
  URL: `http://localhost:3000/api/v1/emp/employees`

- **GET**: Retrieve Employee by ID  
  URL: `http://localhost:3000/api/v1/emp/employees/:eid`

- **PUT**: Update Employee Details  
  URL: `http://localhost:3000/api/v1/emp/employees/:eid`  
  Body (JSON):
  ```json
  {
    "position": "Senior Developer"
  }
  ```

- **DELETE**: Delete an Employee  
  URL: `http://localhost:3000/api/v1/emp/employees/:eid`


---
