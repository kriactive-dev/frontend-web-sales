import logo from "../../assets/images/logo/logo-ligth.svg"
import userprofile from "../../assets/images/user/avatar-1.jpg"
import React, { useState } from "react";
import { UserRound, ScrollText, ShieldCheck, ChevronRight, ListFilter } from "lucide-react";

interface MenuItem {
    label: string;
    icon: React.ReactNode;
    submenu: string[];
}

const menuItems: MenuItem[] = [
    {
        label: "Usuário",
        icon: <UserRound className="iconLinkUser" />,
        submenu: ["Lista", "Configurações"],
    },
    {
        label: "Roles",
        icon: <ScrollText className="iconLinkUser" />,
        submenu: ["Lista"],
    },
    {
        label: "Permissões",
        icon: <ShieldCheck className="iconLinkUser" />,
        submenu: ["Lista"],
    },
];
const Sidebar: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleSubmenu = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <>

            <div className="sideBarComponent">
                <div className="logoSideBarComponent">
                    <img src={logo} alt="Logotipo" />
                </div>
                <div className="dashProfile">
                    <div className="profile">
                        <div className="proL">
                            <div className="imgProfile">
                                <img src={userprofile} alt="Profiles" />

                            </div>
                            <div className="naCar">
                                <span>
                                    Jonh Smith
                                </span>
                                <span>
                                    Administrator
                                </span>
                            </div>
                        </div>

                        <div className="listFilterL">
                            <ListFilter className="listFilterLIcon"></ListFilter>
                        </div>



                    </div>
                    <div className="pagesDash">
                        <h2>Gestão de Usuários</h2>
                        <ul>
                            {menuItems.map((item, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <li key={index} onClick={() => toggleSubmenu(index)}>
                                        <div className="menuPri">
                                            <div className="inconLf">
                                                {item.icon}
                                                <span>{item.label}</span>
                                            </div>
                                            <ChevronRight
                                                className={`iconLinkUserv2 ${isActive ? 'rotate' : ''}`}
                                            />
                                        </div>

                                        <div className={`submenuWrapper ${isActive ? 'open' : ''}`}>
                                            <ul className="submenuDash">
                                                {item.submenu.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <span>{subItem}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                );
                            })}

                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sidebar;






