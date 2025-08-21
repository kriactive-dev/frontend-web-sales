import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    
    setSidebarOpen(prev => !prev);
    console.log("Gravancao")
    console.log(sidebarOpen)
    localStorage.setItem("menuopenkriative", JSON.stringify(sidebarOpen));
  };
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      const dados = localStorage.getItem("menuopenkriative");

      if (dados) {
        const isTrue = dados.toString().toLowerCase() === "true";
        setSidebarOpen(!isTrue); 
      }

      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="containerLoader">
        <div className="loader"></div>
    </div>
    );
  }

  return (
    <div className="barsDash">
      <div
        className={sidebarOpen ? "barsHeaderSide" : "sidebarhiden"}
        onClick={() => {
          if (!sidebarOpen) setSidebarOpen(true);
        }}
      >
        <div
          className="sidebar"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Sidebar onToggleSidebar={toggleSidebar} />
        </div>
      </div>
      <div className={sidebarOpen ? "barsBody" : "barsBodyAll"}>
        <div className="headerbar">
          <Header onToggleSidebar={toggleSidebar} />
        </div>
        <div className="bodyDashJ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}


export default Dashboard;