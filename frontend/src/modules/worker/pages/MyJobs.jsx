import React, { useState } from 'react';
import { List, FileText, User, LogOut, ArrowLeft } from 'lucide-react';

export default function TaskDetailPage() {
  const [bidAmount, setBidAmount] = useState('');
  const [proposal, setProposal] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-b-4 border-green-500 py-3">
        <h1 className="text-center text-green-600 font-semibold text-lg">Worker - Task Detail</h1>
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
          <div className="flex justify-end items-center mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Rajesh Kumar</span>
              <LogOut size={18} className="text-gray-600 cursor-pointer" />
            </div>
          </div>

          {/* Back to Tasks Link */}
          <a href="#" className="flex items-center gap-2 text-green-600 hover:underline mb-4 text-sm">
            <ArrowLeft size={16} />
            <span>Back to Tasks</span>
          </a>

          {/* Page Title with Status */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">House Cleaning Service</h2>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-medium">
              Open
            </span>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-3 gap-6">
            {/* Left Column - Task Details */}
            <div className="col-span-2 space-y-6">
              {/* Description Section */}
              <div className="bg-white rounded-lg border p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Description</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Need a professional cleaner for a 3BHK apartment in Andheri West. The task includes cleaning all rooms, kitchen, and bathrooms. Must bring own cleaning supplies.
                </p>
              </div>

              {/* Task Details Section */}
              <div className="bg-white rounded-lg border p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Task Details</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Posted By</p>
                    <p className="text-sm font-medium text-gray-800">John Doe</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Category</p>
                    <p className="text-sm font-medium text-gray-800">Cleaning</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Location</p>
                    <p className="text-sm font-medium text-gray-800">Andheri West, Mumbai</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Deadline</p>
                    <p className="text-sm font-medium text-gray-800">Dec 15, 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Place a Bid */}
            <div className="col-span-1">
              <div className="bg-white rounded-lg border p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Place a Bid</h3>
                
                {/* Client's Budget */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-1">Client's Budget</p>
                  <p className="text-2xl font-bold text-green-600">₹2,500</p>
                </div>

                {/* Your Bid Amount */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Bid Amount (₹)
                  </label>
                  <input
                    type="text"
                    placeholder="Enter amount"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Proposal/Note */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Proposal / Note
                  </label>
                  <textarea
                    placeholder="Describe why you are best for this task..."
                    value={proposal}
                    onChange={(e) => setProposal(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  />
                </div>

                {/* Submit Bid Button */}
                <button className="w-full bg-green-500 text-white py-2 rounded font-medium hover:bg-green-600 transition">
                  Submit Bid
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}