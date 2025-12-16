import React from 'react';
import { Outlet } from 'react-router-dom';
import WorkerSidebar from '../../components/Sidebar';
import WorkerHeader from '../../components/Header';

const WorkerLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <WorkerHeader />

            {/* Main Container */}
            <div className="flex">
                {/* Sidebar */}
                <div style={{ width: '192px', flexShrink: 0 }}>
                    <WorkerSidebar />
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default WorkerLayout;