import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import { Outlet } from "react-router-dom";
const Dashboard: React.FC = () => {
    return (
        <div className="barsDash">
          <div className="barsHeaderSide">
            <div className="sidebar">
              <Sidebar />
            </div>
          </div>
          <div className="barsBody">
            <div className="headerbar">
              <Header />
            </div>
            <div className="bodyDashJ">
              <Outlet />
            </div>
          </div>
        </div>
      );
}

export default Dashboard;