import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };
    return (
        <div className="barsDash">
          <div className= {sidebarOpen? "barsHeaderSide" :"sidebarhiden"}>
            <div className= "sidebar">
              <Sidebar />
            </div>
          </div>
          <div className= {sidebarOpen? "barsBody" :"barsBodyAll"}>
            <div className="headerbar">
              <Header  onToggleSidebar={toggleSidebar} />
            </div>
            <div className="bodyDashJ">
              <Outlet />
            </div>
          </div>
        </div>
      );
}

export default Dashboard;