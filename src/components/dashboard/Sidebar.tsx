import type React from "react"
import logo from "../../assets/images/logo/logo-ligth.svg"

const Sidebar: React.FC = () => {
    return (
        <>

            <div className="sideBarComponent">
                <div className="logoSideBarComponent">
                    <img src={logo} alt="Logotipo" />
                </div>
            </div>
        </>
    )
}

export default Sidebar;