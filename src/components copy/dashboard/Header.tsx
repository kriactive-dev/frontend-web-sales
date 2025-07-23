import { Menu, Search } from "lucide-react";
import type React from "react";
import userAvatar from "../../assets/images/user/avatar-2.jpg";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const {t} = useTranslation()
  return (
    <>
      <header className="headerDah">
        <div className="serachBar">
          <Menu className="serachBarMenuIcon" />
          <div className="serach">
            <Search className="serachIcon" />
            <input type="text" placeholder={t('search')} />
          </div>
        </div>
        <div className="profileBars">
          <div className="profileBarsUser">
            <img src={userAvatar} alt="user profile" />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;