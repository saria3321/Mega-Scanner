import React, { useState } from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardContent from '../components/DashboardContent';
import DashboardTopBar from '../components/DashboardTopBar';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {isSidebarOpen && <DashboardSidebar />}

      {/* Main Content with Top Bar */}
      <div className="flex-1 flex flex-col">
        <DashboardTopBar toggleSidebar={toggleSidebar} /> {/* Top Bar */}
        <DashboardContent /> {/* Main Content */}
      </div>
    </div>
  );
};

export default Dashboard;
