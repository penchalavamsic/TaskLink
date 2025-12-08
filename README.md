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
│   │   │   └── P
