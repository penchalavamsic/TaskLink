## 📁 Frontend Folder Structure

```bash
src/
│
├── components/                     # Reusable UI Components
│   ├── Sidebar.jsx
│   ├── Header.jsx
│   ├── StatCard.jsx
│   ├── QuickActions.jsx
│   ├── TaskCard.jsx
│   └── Button.jsx
│
├── context/                        # Context API (global state)
│   └── ThemeContext.jsx
│
├── modules/                        # Role-based modules
│   │
│   ├── user/
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx             # User Dashboard
│   │   │   ├── MyTasks.jsx               # All Posted Tasks
│   │   │   ├── PostTask.jsx              # Create New Task
│   │   │   ├── TaskDetail.jsx            # Task Details + Bids View
│   │   │   ├── Profile.jsx               # User Profile Settings
│   │   │   └── Reviews.jsx               # User Reviews Page
│   │   └── UserLayout.jsx
│   │
│   ├── worker/
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx             # Worker Dashboard
│   │   │   ├── BrowseTasks.jsx           # Browse Available Tasks
│   │   │   ├── MyBids.jsx                # Worker Bids List
│   │   │   ├── TaskDetail.jsx            # Worker Task Detail (Bid Form)
│   │   │   └── Profile.jsx               # Worker Profile + Skills + ID Proof
│   │   └── WorkerLayout.jsx
│   │
│   └── admin/
│       ├── pages/
│       │   ├── Dashboard.jsx             # Admin Dashboard
│       │   ├── ManageTasks.jsx           # Admin - Task Monitoring
│       │   ├── ManageUsers.jsx           # Admin - User Management
│       │   └── WorkerVerification.jsx    # Admin - Worker Verification Page
│       └── AdminLayout.jsx
│
├── utils/                           # Helper functions
│   └── formatDate.js
│
├── styles/                          # Tailwind + Optional CSS
│   ├── globals.css
│   └── theme.css
│
├── App.jsx                          # Root routes setup
├── main.jsx                         # Entry point (renders the app)
└── index.css                        # Tailwind import file
