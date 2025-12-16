import React, { useState } from 'react';
import { List, FileText, User, LogOut, File } from 'lucide-react';

export default function ProfilePage() {
  const [fullName, setFullName] = useState('Rajesh Kumar');
  const [email, setEmail] = useState('rajesh.kumar@example.com');
  const [phone, setPhone] = useState('+91 9988776655');
  const [location, setLocation] = useState('Andheri West, Mumbai');

  const skills = ['Cleaning', 'Plumbing'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-b-4 border-green-500 py-3">
        <h1 className="text-center text-green-600 font-semibold text-lg">Worker - Profile</h1>
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
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded mb-1">
              <FileText size={18} />
              <span className="text-sm">My Bids</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-green-600 bg-green-50 rounded mb-1">
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

          {/* Page Title */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Profile Settings</h2>
            <p className="text-gray-500 text-sm">Manage your account and skills</p>
          </div>

          {/* Profile Picture Section */}
          <div className="bg-white rounded-lg border p-6 mb-6">
            <h3 className="font-semibold text-gray-800 mb-4">Profile Picture</h3>
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-xl font-semibold">RK</span>
              </div>
              {/* Upload Button */}
              <div>
                <button className="bg-green-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-600 mb-1">
                  Upload Photo
                </button>
                <p className="text-xs text-gray-500">JPG, PNG or GIF. Max size 2MB</p>
              </div>
            </div>
          </div>

          {/* Personal Information Section */}
          <div className="bg-white rounded-lg border p-6 mb-6">
            <h3 className="font-semibold text-gray-800 mb-4">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>

          {/* Skills & Verification Section */}
          <div className="bg-white rounded-lg border p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Skills & Verification</h3>
            
            {/* Skills */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Skills
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <button className="text-green-600 text-sm hover:underline">
                + Add Skill
              </button>
            </div>

            {/* ID Proof */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ID Proof
              </label>
              <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded p-3">
                <div className="flex items-center gap-2">
                  <File size={18} className="text-gray-600" />
                  <span className="text-sm text-gray-700">Aadhar Card.pdf</span>
                </div>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                  Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}