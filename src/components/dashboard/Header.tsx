import { Bell, Languages, Menu, Search, Sun } from "lucide-react";
import type React from "react";
import userAvatar from "../../assets/images/user/avatar-2.jpg";

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {


  return (
    <>
      <header className="headerDah">
        <div className="serachBar">
          <Menu className="serachBarMenuIcon" onClick={onToggleSidebar} />
          <div className="serach">
            <Search className="serachIcon" />
            <input type="text" placeholder="Pesquisar" />
          </div>
        </div>
        <div className="profileBars">
          <div className="profileBarsUser">
            <Sun className="iconBell" />
          </div>

          <div className="profileBarsUser">
            <Languages className="iconBell" />
          </div>

          <div className="profileBarsUser">
            <Bell className="iconBell" />
          </div>

          <div className="profileBarsUser">
            <img src={userAvatar} alt="user profile" />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;