import logo from "../../assets/images/logo/logo-ligth.svg"
import userprofile from "../../assets/images/user/avatar-1.jpg"
import React, { useState } from "react";
import { UserRound, ScrollText, ShieldCheck, ChevronRight, ListFilter } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MenuItem {
    label: string;
    icon: React.ReactNode;
    submenu: string[];
}

const menuItems: MenuItem[] = [
    {
        label: "User",
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
    const navigate = useNavigate();

    const toggleSubmenu = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const removeAccents = (str: string) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    const onNavigate = (path: string, name: string) => {
        const cleanPath = `${removeAccents(name.toLowerCase())}/${removeAccents(path.toLowerCase())}`;
        navigate(cleanPath)
        // console.log(cleanPath);

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
                        <h2>Dashboard</h2>
                        <ul>
                            <div >
                                <ul className="submenuDash">
                                    <li onClick={() => navigate("/dashboard/default")}>
                                        Default
                                    </li>
                                </ul>
                            </div>

                        </ul>
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

                                                    <li key={subIndex} onClick={() => onNavigate(subItem, item.label)}>
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






