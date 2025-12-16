import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import WorkerLayout from "./modules/worker/WorkerLayout";

// Worker pages
import Dashboard from "./modules/worker/pages/Dashboard";
import BrowseTasks from "./modules/worker/pages/BrowseTasks";
import MyBids from "./modules/worker/pages/MyBids";
import MyJobs from "./modules/worker/pages/MyJobs";
import Profile from "./modules/worker/pages/Profile";

// Auth pages (if needed)
import Login from "./modules/authentication/Login";
import SignUp from "./modules/authentication/SignUp";

function App() {
  return (
    <Routes>
      {/* DEFAULT: OPEN WORKER DASHBOARD */}
      <Route path="/" element={<Navigate to="/worker/d\Dashboard" replace />} />

      {/* AUTH ROUTES */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* WORKER MODULE ROUTES */}
      <Route path="/worker" element={<WorkerLayout />}>
        <Route index element={<Navigate to="Dashboard" replace />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="browse-tasks" element={<BrowseTasks />} />
        <Route path="my-bids" element={<MyBids />} />
        <Route path="my-jobs" element={<MyJobs />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/worker/Dashboard" replace />} />
    </Routes>
  );
}

export default App;
