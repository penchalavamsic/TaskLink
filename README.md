# TaskLink - Hyper-local job marketplace

TaskLink is a comprehensive platform connecting users with local workers for various tasks. This project consists of a React frontend and a Spring Boot backend.

## Prerequisites

Before running the project, ensure you have the following installed:
- **Java Development Kit (JDK) 17** or higher
- **Node.js** (v16 or higher) and **npm**
- **MySQL Server**

## Quick Start Commands

Follow these steps to run the project.

### 1. Database Setup
*   Create a MySQL database named `tasklink_main`.
*   Import `database/tasklink-main.sql` into it.
*   Update `backend/backend-tasklink/src/main/resources/application.properties` with your MySQL password.

### 2. Run Backend
Open a terminal and run:
```powershell
cd backend/backend-tasklink
.\mvnw.cmd spring-boot:run
```
*Server starts at http://localhost:8080*

### 3. Run Frontend
Open a **new** terminal window and run:
```powershell
cd frontend
npm install
npm run dev
```
*App opens at http://localhost:5173*

## Default Login Credentials

**Admin:**
- Email: `admin@gmail.com`
- Password: `Admin@123`

**User/Worker:**
- You can sign up a new user via the "Sign Up" page.

## Project Structure

- **frontend/**: React application source code.
- **backend/**: Spring Boot application source code.
- **database/**: SQL scripts for database initialization.

