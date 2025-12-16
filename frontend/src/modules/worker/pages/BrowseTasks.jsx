import React from 'react';
import { List, FileText, User, LogOut, Search, MapPin, IndianRupee, Calendar } from 'lucide-react';

export default function TaskListPage() {
  const tasks = [
    {
      title: 'House Cleaning',
      postedBy: 'John Doe',
      description: 'Need a professional cleaner for a 3BHK apartment. Must bring own equipment.',
      price: '₹2,500',
      location: 'Andheri West',
      date: 'Dec 15, 2025',
      status: 'Open',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      title: 'Plumbing Repair',
      postedBy: 'Priya Sharma',
      description: 'Fix leaking pipe in kitchen sink. Urgent requirement.',
      price: '₹1,200',
      location: 'Bandra East',
      date: 'Dec 10, 2025',
      status: 'Open',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      title: 'Electrical Wiring',
      postedBy: 'Suresh Patel',
      description: 'Complete rewiring for a small office space.',
      price: '₹5,000',
      location: 'Powai',
      date: 'Dec 20, 2025',
      status: 'Open',
      statusColor: 'bg-green-100 text-green-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-b-4 border-green-500 py-3">
        <h1 className="text-center text-green-600 font-semibold text-lg">Worker - Task List</h1>
      </div>

      {/* Main Container */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-48 bg-white border-r min-h-screen">
          {/* Logo */}
          <div className="p-4 border-b flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">TS</span>
            </div>
            <span className="font-semibold text-gray-800">TaskService</span>
          </div>

          {/* Navigation */}
          <nav className="p-2">
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded mb-1">
              <List size={18} />
              <span className="text-sm">Dashboard</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-green-600 bg-green-50 rounded mb-1">
              <List size={18} />
              <span className="text-sm">Browse Tasks</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded mb-1">
              <FileText size={18} />
              <span className="text-sm">My Bids</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded mb-1">
              <User size={18} />
              <span className="text-sm">Profile</span>
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header with user info */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Browse Tasks</h2>
              <p className="text-gray-500 text-sm">Find and bid on tasks that match your skills</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Rajesh Kumar</span>
              <LogOut size={18} className="text-gray-600 cursor-pointer" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search tasks..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Task Cards Grid */}
          <div className="grid grid-cols-3 gap-6">
            {tasks.map((task, index) => (
              <div key={index} className="bg-white rounded-lg border shadow-sm hover:shadow-md transition">
                <div className="p-4">
                  {/* Header with title and status */}
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-800 text-lg">{task.title}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${task.statusColor}`}>
                      {task.status}
                    </span>
                  </div>

                  {/* Posted by */}
                  <p className="text-sm text-gray-600 mb-3">Posted by {task.postedBy}</p>

                  {/* Description */}
                  <p className="text-sm text-gray-700 mb-4">{task.description}</p>

                  {/* Task Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <IndianRupee size={16} />
                      <span>{task.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin size={16} />
                      <span>{task.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar size={16} />
                      <span>{task.date}</span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button className="w-full bg-green-500 text-white py-2 rounded font-medium hover:bg-green-600 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}