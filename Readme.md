frontend folder structure----
src/
│
├── components/              # Reusable UI Components
│   ├── Sidebar.jsx
│   ├── Header.jsx
│   ├── StatCard.jsx
│   ├── QuickActions.jsx
│   └── TaskCard.jsx
│
├── context/                 # Context API (global state)
│   └── ThemeContext.jsx
│
├── modules/                 # Role-based modules
│   ├── user/
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── MyTasks.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── Reviews.jsx
│   │   └── UserLayout.jsx
│   │
│   ├── worker/
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   └── MyJobs.jsx
│   │   └── WorkerLayout.jsx
│   │
│   └── admin/
│       ├── pages/
│       │   ├── Dashboard.jsx
│       │   └── ManageUsers.jsx
│       └── AdminLayout.jsx
│
├── utils/                   # Helper functions (simple ones)
│   └── formatDate.js
│
├── App.jsx
├── main.jsx
└── index.css
