import { Bell, CardSim, Database, Languages, Mail, Menu, Moon, Search, Settings, Sun, UserRoundPlus } from "lucide-react";
import type React from "react";
import userAvatar from "../../assets/images/user/avatar-2.jpg";
import { useState } from "react";

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {

  const [darkOpen, setDarkOpen] = useState<boolean>(false)
  const [languageOpen, setLanguageOpen] = useState<boolean>(true)
  const [notificationOpen, setnotificationOpen] = useState<boolean>(false)
  const handleChooseMode = (name: string) => {
    console.log(name)
    setDarkOpen(false)
  }
  const handleChooseLanguage = (name: string) => {
    console.log(name)
    setLanguageOpen(false)
  }

  const handleNotification = (name: string) => {
    console.log(name)
    setnotificationOpen(false)
  }
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
            <Bell className="iconBell" onClick={()=>{
              setnotificationOpen(!notificationOpen)
            }} />

            <div className={`selectOptionsUser ${notificationOpen ? 'notificationOpen' : 'notificationClose'}`}>
              <div className="headerSelectUser">
                <h2>
                  Notificações
                </h2>
                <div className="notfNa">
                  Marcar como lidas
                </div>
              </div>
              <div className="containerBell">
                <div className="containerNot">
                  <h3>
                    Hoje
                  </h3>
                  <ul>
                    <li>
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

                    <li>
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
                    Ontem
                  </h3>
                  <ul>
                    <li>
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

                    <li>
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


            </div>
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