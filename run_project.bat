@echo off
echo ===================================================
echo   TaskLink Project - Quick Start (Windows)
echo ===================================================

echo.
echo Starting Backend (Spring Boot)...
start "TaskLink Backend" cmd /k "cd backend\backend-tasklink && mvnw.cmd spring-boot:run"

echo.
echo Starting Frontend (React)...
start "TaskLink Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo ===================================================
echo   Services are starting in new windows.
echo   - Backend: http://localhost:8080
echo   - Frontend: http://localhost:5173
echo.
echo   Please ensure your MySQL database is running 
echo   and configured in application.properties.
echo ===================================================
pause
