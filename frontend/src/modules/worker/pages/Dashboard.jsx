import React from 'react';
import { CheckCircle, List, FileText, User, Calendar, MapPin, IndianRupee, LogOut } from 'lucide-react';

export default function WorkerDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-b-4 border-green-500 py-3">
        <h1 className="text-center text-green-600 font-semibold text-lg">Worker Dashboard</h1>
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
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-green-600 bg-green-50 rounded mb-1">
              <List size={18} />
              <span className="text-sm">Dashboard</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded mb-1">
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
              <h2 className="text-2xl font-bold text-gray-800">Welcome back, Rajesh!</h2>
              <p className="text-gray-500 text-sm">Find tasks near you and grow your business</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Rajesh Kumar</span>
              <LogOut size={18} className="text-gray-600 cursor-pointer" />
            </div>
          </div>

          {/* Account Verified Banner */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Account Verified</h3>
                <p className="text-sm text-gray-600">You can now bid on tasks</p>
              </div>
            </div>
            <span className="bg-white text-green-600 px-3 py-1 rounded text-sm font-medium border border-green-200">
              Verified
            </span>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Nearby Tasks */}
            <div className="bg-white rounded-lg border p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Nearby Tasks</span>
                <List size={20} className="text-green-500" />
              </div>
              <p className="text-3xl font-bold text-gray-800">18</p>
            </div>

            {/* My Bids */}
            <div className="bg-white rounded-lg border p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">My Bids</span>
                <FileText size={20} className="text-purple-500" />
              </div>
              <p className="text-3xl font-bold text-gray-800">5</p>
            </div>

            {/* Completed Jobs */}
            <div className="bg-white rounded-lg border p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Completed Jobs</span>
                <CheckCircle size={20} className="text-green-500" />
              </div>
              <p className="text-3xl font-bold text-gray-800">45</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Browse Available Tasks */}
              <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-green-500 cursor-pointer transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                    <List size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Browse Available Tasks</h4>
                    <p className="text-sm text-gray-600">Find tasks matching your skills</p>
                  </div>
                </div>
              </div>

              {/* View My Bids */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-purple-500 cursor-pointer transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded flex items-center justify-center flex-shrink-0">
                    <FileText size={24} className="text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">View My Bids</h4>
                    <p className="text-sm text-gray-600">Track your bid status</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby Tasks */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800">Nearby Tasks</h3>
              <a href="#" className="text-sm text-green-600 hover:underline">View All</a>
            </div>

            {/* Task Cards */}
            <div className="space-y-3">
              {/* House Cleaning Service */}
              <div className="bg-white border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">House Cleaning Service</h4>
                    <p className="text-sm text-gray-600 mb-3">Posted by John Doe</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <IndianRupee size={16} />
                        <span>₹2,500</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>Dec 15, 2025</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>Andheri West</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-green-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-600 whitespace-nowrap">
                    View Details
                  </button>
                </div>
              </div>

              {/* Plumbing Repair */}
              <div className="bg-white border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">Plumbing Repair</h4>
                    <p className="text-sm text-gray-600 mb-3">Posted by Priya Sharma</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <IndianRupee size={16} />
                        <span>₹1,200</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>Dec 10, 2025</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>Bandra East</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-green-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-600 whitespace-nowrap">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}