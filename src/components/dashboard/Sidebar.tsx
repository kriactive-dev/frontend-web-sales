import logo from "../../assets/images/logo/logo-ligth.svg"
import userprofile from "../../assets/images/user/avatar-1.jpg"
import React, { useEffect, useState } from "react";
import { UserRound, ScrollText, ShieldCheck, ListFilter, ChevronDown, ChartPie, User, Settings, LockKeyhole, Power } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import routes from "../../utils/routes/routes";
import { useLocation } from "react-router-dom";


interface MenuItem {
    label: string;
    icon: React.ReactNode;
    submenu: {
        name: string;
        router: string;
    }[];
}

interface HeaderProps {
    onToggleSidebar: () => void;
}

const Sidebar: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
    const [selectedSubmenu, setSelectedSubmenu] = useState({ submenu: "", parent: "" });

    // const [activeMenu, setActiveMenu] = useState<{ group: "user" | "dashboard"; index: number } | null>(null);
    const [activeMenu, setActiveMenu] = useState<{ group: string; index: number } | null>(null);

    const [menuIsExpanded, setMenuIsExpanded] = useState<boolean>(false);

    const location = useLocation();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const menuItems: MenuItem[] = [
        {
            label: t("user"),
            icon: <UserRound className="iconLinkUser" />,
            submenu: [{ name: t("list"), router: routes.user.list }],
        },
        {
            label: t("roles"),
            icon: <ScrollText className="iconLinkUser" />,
            submenu: [{ name: t("list"), router: routes.roles }],
        },
        {
            label: t("permissions"),
            icon: <ShieldCheck className="iconLinkUser" />,
            submenu: [{ name: t("list"), router: routes.permissions }],
        },
    ];

    const menuItems2: MenuItem[] = [
        {
            label: t("dashboard"),
            icon: <ChartPie className="iconLinkUser" />,
            submenu: [
                { name: "Default", router: routes.dahsboardDefault },
                { name: "Finance", router: routes.drop },
            ],
        },
    ];

    const toggleMenu = (group: string, index: number) => {
        setActiveMenu((prev) =>
            prev?.group === group && prev?.index === index ? null : { group, index }
        );
    };


    useEffect(() => {
        const path = location.pathname;

        const dashboardIndex = menuItems2.findIndex((item) =>
            item.submenu.some((sub) => path.endsWith(sub.router))
        );

        if (dashboardIndex !== -1) {
            const matchedSub = menuItems2[dashboardIndex].submenu.find((sub) =>
                path.endsWith(sub.router)
            );

            if (matchedSub) {
                setActiveMenu({ group: "dashboard", index: dashboardIndex });
                setSelectedSubmenu({
                    submenu: matchedSub.router,
                    parent: menuItems2[dashboardIndex].label,
                });
                return;
            }
        }

        const userIndex = menuItems.findIndex((item) =>
            item.submenu.some((sub) => path.endsWith(sub.router))
        );

        if (userIndex !== -1) {
            const matchedSub = menuItems[userIndex].submenu.find((sub) =>
                path.endsWith(sub.router)
            );

            if (matchedSub) {
                setActiveMenu({ group: "user", index: userIndex });
                setSelectedSubmenu({
                    submenu: matchedSub.router,
                    parent: menuItems[userIndex].label,
                });
            }
        }
    }, [location.pathname]);



    // const removeAccents = (str: string) => {
    //     return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // };

    const onNavigate = (path: string, name: string) => {
        const isMobile = window.innerWidth < 870;
        if (isMobile) onToggleSidebar();

        setSelectedSubmenu({ submenu: path, parent: name });
        navigate(path);
    };

    return (
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
                                <span>Jonh Smith</span>
                                <span>Administrator</span>
                            </div>
                        </div>
                        <div className="listFilterL">
                            <ListFilter
                                className="listFilterLIcon"
                                onClick={() => setMenuIsExpanded(!menuIsExpanded)}
                            />
                        </div>
                    </div>

                    <div className={`expandirProfile ${menuIsExpanded ? "isExpandirProfile" : "notExpandirProfile"}`}>
                        <ul>
                            <li>
                                <User className="expandirProfileIcon" />
                                <span>My account</span>
                            </li>
                            <li>
                                <Settings className="expandirProfileIcon" />
                                <span>Settings</span>
                            </li>
                            <li>
                                <LockKeyhole className="expandirProfileIcon" />
                                <span>Lock screen</span>
                            </li>
                            <li onClick={() => navigate("/")}>
                                <Power className="expandirProfileIcon" />
                                <span>Logout</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* DASHBOARD */}
                <div className="pagesDash">
                    <h2>{t("overview")}</h2>
                    <ul>
                        {menuItems2.map((item, index) => {
                            const isActive = activeMenu?.group === "dashboard" && activeMenu.index === index;
                            return (
                                <li key={index}>
                                    <div className="menuPri" onClick={() => toggleMenu("dashboard", index)}>
                                        <div className="inconLf">
                                            {item.icon}
                                            <span>{item.label}</span>
                                        </div>
                                        <ChevronDown className={`iconLinkUserv2 ${isActive ? "rotate" : ""}`} />
                                    </div>

                                    <div className={`submenuWrapper ${isActive ? "open" : ""}`}>
                                        <ul className="submenuDash">
                                            {item.submenu.map((subItem, subIndex) => (
                                                <li
                                                    key={subIndex}
                                                    onClick={() => onNavigate(subItem.router, item.label)}
                                                    className={
                                                        selectedSubmenu.submenu === subItem.router &&
                                                            selectedSubmenu.parent === item.label
                                                            ? "colorPut"
                                                            : ""
                                                    }
                                                >
                                                    <span>{subItem.name}</span>
                                                </li>
                                            ))}
                                        </ul>

                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* USUÁRIOS */}
                <div className="pagesDash">
                    <h2>{t("user_Management")}</h2>
                    <ul>
                        {menuItems.map((item, index) => {
                            const isActive = activeMenu?.group === "user" && activeMenu.index === index;
                            return (
                                <li key={index}>
                                    <div className="menuPri" onClick={() => toggleMenu("user", index)}>
                                        <div className="inconLf">
                                            {item.icon}
                                            <span>{item.label}</span>
                                        </div>
                                        <ChevronDown className={`iconLinkUserv2 ${isActive ? "rotate" : ""}`} />
                                    </div>

                                    <div className={`submenuWrapper ${isActive ? "open" : ""}`}>
                                        <ul className="submenuDash">
                                            {item.submenu.map((subItem, subIndex) => (
                                                <li
                                                    key={subIndex}
                                                    onClick={() => onNavigate(subItem.router, item.label)}
                                                    className={
                                                        selectedSubmenu.submenu === subItem.router &&
                                                            selectedSubmenu.parent === item.label
                                                            ? "colorPut"
                                                            : ""
                                                    }
                                                >
                                                    <span>{subItem.name}</span>
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
    );
};

export default Sidebar;