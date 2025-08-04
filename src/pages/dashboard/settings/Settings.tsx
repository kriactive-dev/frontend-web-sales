import { ChevronRight, Search, UserPen, UserRoundPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Photo from '../../../assets/images/user/avatar-1.jpg'
import React from "react";


const Settings: React.FC = () => {
    const navigate = useNavigate();

    const handleClickNavList = (name: string) => {
        navigate(`/dashboard/${name}`)
    }

    const { t } = useTranslation()
    return (
        <>
            <div className="containerFolderFollow">
                <div className="pathFollow">
                    <ul>
                        <li onClick={() => {
                            handleClickNavList("default")
                        }}>
                            <span>Home</span>
                            <ChevronRight className='iconFollow'></ChevronRight>
                        </li>
                        <li>
                            <span>Settings</span>
                        </li>
                    </ul>
                </div>
                <div className="tableContainer">
                    <div className="headerTableList">
                        <div className="containerTitleHeader" style={{ padding: '0px' }}>
                            <h2>Sentings</h2>
                        </div>
                        <button className="action-btn-new-user" title="Novo usuário" onClick={() => {
                            console.log("Editar")
                        }}>
                            <UserPen size={16} className='iconPlusUser' />
                            <span>Editar</span>
                        </button>
                    </div>
                    <div className="containerBodySettings">
                        <div className="sidePofile">
                            <div className="profilePhoto">
                                <img src={Photo} alt="" />
                            </div>
                            <h2>
                                Joaquim João Manuel
                            </h2>
                            <h3>
                                Science user
                            </h3>
                        </div>
                        <div className="bodyProfile">

                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}


export default Settings;