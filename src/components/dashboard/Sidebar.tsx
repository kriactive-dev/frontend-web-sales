import logo from "../../assets/images/logo/logo-ligth.svg"
import userprofile from "../../assets/images/user/avatar-1.jpg"
import React, { useState } from "react";
import { UserRound, ScrollText, ShieldCheck, ListFilter, ChevronDown, ChartPie, User, Settings, LockKeyhole, Power } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MenuItem {
    label: string;
    icon: React.ReactNode;
    submenu: string[];
}


interface HeaderProps {
    onToggleSidebar: () => void;
}

const menuItems: MenuItem[] = [
    {
        label: "User",
        icon: <UserRound className="iconLinkUser" />,
        submenu: ["Lista", "Novo"],
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

const menuItems2: MenuItem[] = [
    {
        label: "Dashboard",
        icon: <ChartPie className="iconLinkUser" />,
        submenu: ["Default", "Finance"],
    }
];
const Sidebar: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
    const [selectedSubmenu, setSelectedSubmenu] = useState({ submenu: "", parent: "" });


    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [activeIndexDash, setActiveIndexDash] = useState<number | null>(null);
    const [menuIsExpanded, setMenuIsExpanded] = useState<boolean>(false)
    const navigate = useNavigate();

    const toggleSubmenu = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const toggleSubmenuDash = (index: number) => {
        setActiveIndexDash((prevIndex) => (prevIndex === index ? null : index));
    };



    const removeAccents = (str: string) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };
    const onNavigate = (path: string, name: string) => {

        const isMobile = window.innerWidth < 870;

        if (isMobile) {
            onToggleSidebar();
        }

        // onToggleSidebar()
        let cleanPath = ""
        if (name === "") {
            cleanPath = `${removeAccents(path.toLowerCase())}`;
        } else {
            cleanPath = `${removeAccents(name.toLowerCase())}/${removeAccents(path.toLowerCase())}`;
        }
        setSelectedSubmenu({ submenu: path, parent: name });

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
                        <div className="topPartProfile">
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
                            <ListFilter className="listFilterLIcon" onClick={()=>{
                                setMenuIsExpanded(!menuIsExpanded)
                            }}></ListFilter>
                        </div>
                        </div>
                        
                        <div className={`expandirProfile ${menuIsExpanded ? 'isExpandirProfile' : 'notExpandirProfile'}`}>
                            <ul>
                                <li>
                                    <User className="expandirProfileIcon"/>
                                    <span>
                                        My account
                                    </span>
                                </li>
                                <li>
                                    <Settings className="expandirProfileIcon"/>
                                    <span>
                                        Settings
                                    </span>
                                </li>
                                <li>
                                    <LockKeyhole className="expandirProfileIcon"/>
                                    <span>
                                        Lock screen
                                    </span>
                                </li>
                                <li onClick={()=>{
                                    navigate("/")
                                }}>
                                    <Power className="expandirProfileIcon"/>
                                    <span>
                                        Logout
                                    </span>
                                </li>
                            </ul>
                        </div>


                    </div>

                    {/* <div className="pagesDash">
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
                    </div> */}

                    <div className="pagesDash">
                        <h2>Dashboard</h2>
                        <ul>
                            {menuItems2.map((item, index) => {
                                const isActive = activeIndexDash === index;
                                return (
                                    <li key={index} onClick={() => toggleSubmenuDash(index)}>
                                        <div className="menuPri">
                                            <div className="inconLf">
                                                {item.icon}
                                                <span>{item.label}</span>
                                            </div>
                                            <ChevronDown
                                                className={`iconLinkUserv2 ${isActive ? 'rotate' : ''}`}
                                            />
                                        </div>

                                        <div className={`submenuWrapper ${isActive ? 'open' : ''}`}>
                                            <ul className="submenuDash">
                                                {item.submenu.map((subItem, subIndex) => (

                                                    <li key={subIndex} onClick={() => onNavigate(subItem, "")}>
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

                    <div className="pagesDash">
                        <h2>Gestão de Usuários</h2>
                        <ul>
                            {menuItems.map((item, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <li key={index} onClick={() => toggleSubmenu(index)} >
                                        <div className="menuPri">
                                            <div className="inconLf">
                                                {item.icon}
                                                <span>{item.label}</span>
                                            </div>
                                            <ChevronDown
                                                className={`iconLinkUserv2 ${isActive ? 'rotate' : ''}`}
                                            />
                                        </div>

                                        <div className={`submenuWrapper ${isActive ? 'open' : ''}`}>
                                            <ul className="submenuDash">
                                                {item.submenu.map((subItem, subIndex) => (
                                                    <li
                                                        key={subIndex}
                                                        onClick={() => onNavigate(subItem, item.label)}
                                                        className={
                                                            selectedSubmenu.submenu === subItem && selectedSubmenu.parent === item.label
                                                                ? "colorPut"
                                                                : ""
                                                        }
                                                    >
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






