import React from 'react';
import { List, FileText, User, LogOut } from 'lucide-react';

export default function MyBidsPage() {
  const bids = [
    {
      taskTitle: 'House Cleaning Service',
      postedBy: 'John Doe',
      bidAmount: '₹2,300',
      status: 'Pending',
      statusColor: 'bg-yellow-100 text-yellow-700',
      date: 'Dec 2, 2025',
      action: 'Withdraw',
      actionColor: 'text-red-600'
    },
    {
      taskTitle: 'Plumbing Repair',
      postedBy: 'Priya Sharma',
      bidAmount: '₹1,100',
      status: 'Accepted',
      statusColor: 'bg-green-100 text-green-700',
      date: 'Dec 1, 2025',
      action: 'View Task',
      actionColor: 'text-green-600'
    },
    {
      taskTitle: 'Painting Work',
      postedBy: 'Amit Singh',
      bidAmount: '₹4,800',
      status: 'Rejected',
      statusColor: 'bg-red-100 text-red-700',
      date: 'Nov 28, 2025',
      action: '',
      actionColor: ''
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-b-4 border-green-500 py-3">
        <h1 className="text-center text-green-600 font-semibold text-lg">Worker - My Bids</h1>
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
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded mb-1">
              <List size={18} />
              <span className="text-sm">Browse Tasks</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-green-600 bg-green-50 rounded mb-1">
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
              <h2 className="text-2xl font-bold text-gray-800">My Bids</h2>
              <p className="text-gray-500 text-sm">Track the status of your submitted bids</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Rajesh Kumar</span>
              <LogOut size={18} className="text-gray-600 cursor-pointer" />
            </div>
          </div>

          {/* Bids Table */}
          <div className="bg-white rounded-lg border">
            <table className="w-full">
              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Task Title
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Posted By
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bid Amount
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {bids.map((bid, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {bid.taskTitle}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {bid.postedBy}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {bid.bidAmount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${bid.statusColor}`}>
                        {bid.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {bid.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {bid.action && (
                        <button className={`font-medium hover:underline ${bid.actionColor}`}>
                          {bid.action}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}