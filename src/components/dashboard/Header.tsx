import { Bell, CardSim, Database, Languages, LockKeyhole, LogOut, Mail, Menu, Moon, Search, Settings, Share2, Sun, UserRoundPlus } from "lucide-react";
import type React from "react";
import userAvatar from "../../assets/images/user/avatar-2.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {

  const navigate = useNavigate()
  const [darkOpen, setDarkOpen] = useState<boolean>(false)
  const [languageOpen, setLanguageOpen] = useState<boolean>(false)
  const [notificationOpen, setnotificationOpen] = useState<boolean>(false)
  const [profileOpenDetail, setProfileOpenDetail] = useState<boolean>(false)
  const { t, i18n } = useTranslation();
  const handleChooseMode = (name: string) => {
    console.log(name)
    setDarkOpen(false)
  }
  const handleChooseLanguage = (name: string) => {
    console.log(name)
    i18n.changeLanguage(name);
    setLanguageOpen(false)
  }

  const handleNotification = (name: string) => {
    console.log(name)
    setnotificationOpen(false)
  }

  const handleProfile = (name: string) => {
    console.log(name)
    setProfileOpenDetail(false)
  }

  return (
    <>
      <header className="headerDah">
        <div className="serachBar">
          <Menu className="serachBarMenuIcon" onClick={onToggleSidebar} />
          <div className="serach">
            <Search className="serachIcon" />
            <input type="text" placeholder={t('search')} />
          </div>
        </div>
        <div className="profileBars">
          <div className="profileBarsUser profileBarsUserSun">
            <Sun className="iconBell" onClick={() => {
              setDarkOpen(!darkOpen)
            }} />
            <div className={`selectOptionsUser ${darkOpen ? 'darkOpen' : 'darkClose'}`}>
              <ul>
                <li onClick={() => {
                  handleChooseMode("dark")
                }}>
                  <Moon className="selectOptionsUserIcon" />
                  <span>
                    Dark
                  </span>
                </li>
                <li onClick={() => {
                  handleChooseMode("light")
                }}>
                  <Sun className="selectOptionsUserIcon" />
                  <span>
                    Light
                  </span>
                </li>
                <li onClick={() => {
                  handleChooseMode("default")
                }}>
                  <Settings className="selectOptionsUserIcon" />
                  <span>
                    Default
                  </span>
                </li>

              </ul>
            </div>
          </div>

          <div className="profileBarsUser profileBarsUserSun">
            <Languages className="iconBell" onClick={() => {
              setLanguageOpen(!languageOpen)
            }} />
            <div className={`selectOptionsUser ${languageOpen ? 'languageOpen' : 'languageClose'}`}>
              <ul>
                <li onClick={() => {
                  handleChooseLanguage("pt")
                }}>
                  <span>
                    Português
                  </span>
                  <span>
                    (Br)
                  </span>
                </li>
                <li onClick={() => {
                  handleChooseLanguage("en")
                }}>
                  <span>
                    English
                  </span>
                  <span>
                    (UK)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="profileBarsUser profileBarsUserSun">
            <Bell className="iconBell" onClick={() => {
              setnotificationOpen(!notificationOpen)
            }} />

            <div className={`selectOptionsUser selectOptionsUsernot ${notificationOpen ? 'notificationOpen' : 'notificationClose'}`}>
              <div className="headerSelectUser">
                <h2>
                  {t('notifications')}
                </h2>
                <div className="notfNa" onClick={() => {
                  handleNotification('readall')
                }}>
                  {t('mark_as_read')}
                </div>
              </div>
              <div className="containerBell">
                <div className="containerNot">
                  <h3>
                    {t('today')}
                  </h3>
                  <ul>
                    <li onClick={() => {
                      handleNotification('readall')
                    }}>
                      <div className="headerNot">
                        <div className="headerNotType">
                          <Database className="headerNotIcon" />
                          <span>
                            Ui/Ux Design
                          </span>
                        </div>
                        <div className="dateNoti">
                          2min
                        </div>
                      </div>
                      <div className="bodyNot">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint at, fugiat deleniti commodi ratione repudiandae eligendi temporibus repellat ipsa, fuga
                      </div>
                    </li>

                    <li onClick={() => {
                      handleNotification('readall')
                    }}>
                      <div className="headerNot">
                        <div className="headerNotType">
                          <Mail className="headerNotIcon" />
                          <span>
                            Messagem
                          </span>
                        </div>
                        <div className="dateNoti">
                          1h:30min
                        </div>
                      </div>
                      <div className="bodyNot">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint at, fugiat deleniti commodi ratione repudiandae
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="containerNot">
                  <h3>
                    {t('yersterday')}
                  </h3>
                  <ul>
                    <li onClick={() => {
                      handleNotification('readall')
                    }}>
                      <div className="headerNot">
                        <div className="headerNotType">
                          <CardSim className="headerNotIcon" />
                          <span>
                            Formulário
                          </span>
                        </div>
                        <div className="dateNoti">
                          1d
                        </div>
                      </div>
                      <div className="bodyNot">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint at, fugiat deleniti commodi ratione repudiandae eligendi temporibus repellat ipsa, fuga
                      </div>
                    </li>

                    <li onClick={() => {
                      handleNotification('readall')
                    }}>
                      <div className="headerNot">
                        <div className="headerNotType">
                          <UserRoundPlus className="headerNotIcon" />
                          <span>
                            Novos usuário
                          </span>
                        </div>
                        <div className="dateNoti">
                          1h:30min
                        </div>
                      </div>
                      <div className="bodyNot">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint at, fugiat deleniti commodi ratione repudiandae
                      </div>
                    </li>
                  </ul>
                </div>

              </div>

              <div className="footerNot">
                <div className="notfNaFoot" onClick={() => {
                  handleNotification('readall')
                }}>
                  {t('delete_all_notifications')}
                </div>
              </div>


            </div>
          </div>

          <div className="profileBarsUser profileBarsUserSun">
            <img src={userAvatar} alt="user profile" onClick={()=>{
              setProfileOpenDetail(!profileOpenDetail)
            }}/>
            <div className={`selectOptionsUser selectOptionsUserProfile ${profileOpenDetail ? 'profileOpenDetail' : 'profileCloseDetail'}`}>
              <h1>
                {t('profile')}
              </h1>
              <div className="headerProfileDetails">
                <img src={userAvatar} alt="user profile" />
                <div className="containerInfoProfileDetails">
                  <h2>
                    John doe
                  </h2>
                  <span>
                    doejohn@kriactive.co.mz
                  </span>
                </div>
              </div>
              <div className="containerthememks">
                <h3>
                  {t('manage')}
                </h3>
                <ul>
                  <li onClick={()=>{
                    handleProfile("")
                  }}>
                    <Settings className="containerthememksIcon"/>
                    <span>{t('settings')}</span>
                  </li>
                   <li onClick={()=>{
                    handleProfile("")
                  }}>
                    <Share2 className="containerthememksIcon"/>
                    <span>{t('share')}</span>
                  </li>
                   <li onClick={()=>{
                    handleProfile("")
                  }}>
                    <LockKeyhole className="containerthememksIcon"/>
                    <span>{t('change_password')}</span>
                  </li>
                </ul>
              </div>
              <button onClick={()=>{
                navigate("/")
              }}>
                <LogOut className="icobBtnLogou" />
                <span>{t('logout')}</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;