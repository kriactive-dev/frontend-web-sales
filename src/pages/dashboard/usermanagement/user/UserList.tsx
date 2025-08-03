import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pencil, Trash2, Eye, ShieldCheck, UserCheck, Plus, Database, X, List, EyeOff, User, UserRound, Check, UserRoundPlus, ChevronRight, Search } from "lucide-react";
import urls from '../../../../utils/apis/apis';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import MultiCheckboxDropdown from '../../../../components/drop/MultiCheckboxDropdownProps';
import { useTranslation } from 'react-i18next';


interface Pivot {
    role_id: number;
    permission_id: number;
}

interface Permission {
    id: number;
    name: string;
    guard_name: string;
    created_at: string;
    updated_at: string;
    pivot: Pivot;
}

interface Role {
    id: number;
    name: string;
    guard_name: string;
    created_at: string;
    updated_at: string;
    permissions: Permission[];
}

interface Permissions {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    created_at: string;
    roles: Role[];
}

interface UserNew {
    name: string;
    email: string;
    password: string;
}
const frameworks = ['Admin', 'Editor', 'view', 'Moderador', 'Convidado'];

const UserList: React.FC = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState<string[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [roles, setRoles] = useState<Role[]>([]);
    const [permissions, setPermissions] = useState<Permissions[]>([]);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [selectedRole, setSelectedRole] = useState<string>("");
    const [selectedPermission, setSelectedPermission] = useState<string>("");
    const [showRoleDialog, setShowRoleDialog] = useState(false);
    const [showPermissionDialog, setShowPermissionDialog] = useState(false);
    const [showNewUserDialog, setShowNewUserDialog] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const {t} = useTranslation()

    const [showPassword, setShowPassword] = useState(false);


    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const [query, setQuery] = useState('');


    const lbnDialogs = {
        user: {
            new: "newuser"
        },
        role: {
            user: "role"
        },
        permitions: {
            user: "permitions"
        }
    }
    const openDialog = (name: string) => {
        if (name == lbnDialogs.user.new) {
            setShowNewUserDialog(true);
        } else if (name == lbnDialogs.role.user) {
            setShowRoleDialog(true)
        } else if (name == lbnDialogs.permitions.user) {

            setShowPermissionDialog(true)
        }

        setTimeout(() => setIsVisible(true), 300);
    };

    const closeDialog = (name: string) => {
        setIsVisible(false);
        if (name == lbnDialogs.user.new) {
            setTimeout(() => setShowNewUserDialog(false), 300);
        } else if (name == lbnDialogs.role.user) {
            setTimeout(() => setShowRoleDialog(false), 300);
        } else if (name == lbnDialogs.permitions.user) {
            setTimeout(() => setShowPermissionDialog(false), 300);
        }

    };

    const handleClickSucess = () => {
        toast.success('Sucesso!');
    }

    const handleClickNavList = (name: string) => {
        navigate(`/dashboard/${name}`)
    }

    const handleClickFaild = () => {
        toast.error('Erro!');
    }
    const deleteUser = async (id: number) => {
        setLoading(true)
        try {
            await axios.delete(`${urls.user}/${id}`);
            setUsers(users.filter(user => user.id !== id));
            handleClickSucess()
        } catch (error) {
            console.error('Erro ao apagar usuário:', error);
            handleClickFaild()
        } finally {
            setLoading(false)
            loadData()
        }
    };


    // useEffect(() => {
    //     axios.get<User[]>(urls.user)
    //         .then(response => {
    //             setUsers(response.data);
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             console.error('Erro ao buscar usuários:', error);
    //             setError('Erro ao carregar dados.');
    //             setLoading(false);
    //         });
    // }, []);

    const loadData = () => {
        axios.get<User[]>(urls.user)
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao buscar usuários:', error);
                setError('Erro ao carregar dados.');
                setLoading(false);
            });

        axios.get(urls.roles)
            .then(res => setRoles(res.data))
            .catch(err => console.error("Erro ao carregar funções:", err));

        axios.get(urls.permissions)
            .then(res => setPermissions(res.data))
            .catch(err => console.error("Erro ao carregar permissões:", err));
    }


    const assignRole = () => {
        setLoading(true);

        if (selectedUserId && selectedRole) {
            axios.post(`${urls.user}/${selectedUserId}/roles`, {
                roles: [selectedRole],
            })
                .then(() => {
                    setShowRoleDialog(false);
                    loadData();
                    toast.success("Sucesso")
                })
                .catch((error) => {
                    console.error("Erro ao atribuir o role:", error);
                    toast.error("Erro ao atribuir o role!");
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
            toast.warn("Role não selecionados.");
        }
    };

    // handleClickSucess

    const assignPermission = () => {
        setLoading(true);

        if (selectedUserId && selectedPermission) {
            axios.post(`${urls.user}/${selectedUserId}/permissions`, {
                permissions: [selectedPermission],
            })
                .then(() => {
                    setShowPermissionDialog(false);
                    loadData();
                    toast.success("Permissão atribuida")
                })
                .catch((error) => {
                    console.error("Erro ao atribuir permissão:", error);
                    toast.error("Erro ao atribuir permissão!");
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
            toast.warn("Usuário ou permissão não selecionados.");
        }
    };


    const [user, setUser] = useState<UserNew>({ name: '', email: '', password: '' });
    const [submitUser, setSubmitUser] = useState<UserNew | null>(null);



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitUser(user);
    };

    const sendUser = async () => {
        closeDialog(lbnDialogs.user.new)
        if (submitUser) {
            setLoading(true)
            try {
                const response = await axios.post(urls.user, submitUser);
                toast.success('Usuário cadastrado com sucesso!')

                setUser({ name: '', email: '', password: '' });
                loadData()

            } catch (error) {
                console.error('Erro ao cadastrar usuário:', error);
                toast.success('Erro ao cadastrar usuário!')
                openDialog(lbnDialogs.user.new)
            } finally {
                setLoading(false)

            }
        }
    };

    useEffect(() => {

        loadData()
        sendUser();
    }, [submitUser]);





    if (loading) return <div className="containerLoader">
        <div className="loader"></div>
    </div>;
    if (error) return <p>{error}</p>;

    return (
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
                        <span>{t('user')}</span>
                    </li>
                </ul>
            </div>
            <div className="tableContainer">
                <div className="dialog"></div>
                <div className="containerTitleHeader">
                    <h2>{t("user_list")}</h2>
                </div>

                <div className="headerTableList">
                    <div className="search-container">
                        <div className="search-row search-row2">
                            <Search size={20} className="search-icon" />
                            <input
                                type="text"
                                placeholder={t('search')}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="search-input"
                            />
                        </div>

                        <div className="search-row">
                            {/* <input
                                type="datetime-local"
                                value={startDateTime}
                                onChange={(e) => setStartDateTime(e.target.value)}
                                className="datetime-input"
                            /> */}
{/* 
                            <DatePicker
                                selected={startDateTime}
                                onChange={(date) => setStartDateTime(date)}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                dateFormat="dd/MM/yyyy HH:mm"
                                timeCaption="Hora"
                            /> */}


                            {/* <input
                                type="datetime-local"
                                value={endDateTime}
                                onChange={(e) => setEndDateTime(e.target.value)}
                                className="datetime-input"
                            /> */}
                        </div>
                    </div>
                    <button className="action-btn-new-user" title="Novo usuário" onClick={() => {
                        // navigate("/dashboard/user/novo")
                        openDialog(lbnDialogs.user.new)
                    }}>
                        <UserRoundPlus size={16} className='iconPlusUser' />
                        <span>{t('new')}</span>
                    </button>
                </div>
                <div className="containerTable">
                    <table className="userTable">
                        <thead>
                            <tr>
                                {/* <th>ID</th> */}
                                <th>{t('name')}</th>
                                <th>Email</th>
                                <th>{t('creation_date')}</th>
                                <th>{t('roles')}</th>
                                <th className='centerTable'>{t('actions')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id} className="tableRow">
                                    {/* <td>{user.id}</td> */}
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{new Date(user.created_at).toLocaleDateString()}</td>
                                    <td>{user.roles.map(role => role.name).join(', ')}</td>
                                    <td className="actions">
                                        <button className="action-btn refresh" title="Detalhes" onClick={() => {

                                        }}>
                                            <Eye size={16} className="btnDetails" />
                                        </button>
                                        <button className="action-btn edit" title="Editar" onClick={() => {
                                            navigate(`/dashboard/user/${user.id}`);
                                        }}>
                                            <Pencil size={16} className="btnUpdate" />
                                        </button>
                                        <button className="action-btn delete" title="Apagar" onClick={() => {
                                            deleteUser(user.id)
                                        }}>
                                            <Trash2 size={16} className="btnTrash" />
                                        </button>
                                        <button className="action-btn" title="Atribuir Permissão" onClick={() => {
                                            setSelectedUserId(user.id);
                                            // setShowPermissionDialog(true);
                                            openDialog(lbnDialogs.permitions.user)
                                        }}>
                                            <ShieldCheck className="btnPermission" size={16} />
                                        </button>
                                        <button className="action-btn" title="Atribuir Função" onClick={() => {
                                            setSelectedUserId(user.id);
                                            // setShowRoleDialog(true);
                                            openDialog(lbnDialogs.role.user)
                                        }}>
                                            <UserCheck size={16} />
                                        </button>
                                    </td>
                                    {/* <td className="actions">
                                <button className="action-btn refresh" title="Detalhes">
                                    <Eye size={16} className="btnDetails" />
                                </button>
                                <button className="action-btn edit" title="Editar">
                                    <Pencil size={16} className="btnUpdate" onClick={()=>{
                                       navigate(`/dashboard/user/${user.id}`);
                                    }} />
                                </button>
                                <button className="action-btn delete" title="Apagar">
                                    <Trash2 size={16} className="btnTrash" onClick={()=>{
                                        deleteUser(user.id)
                                    }} />
                                </button>

                            </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="paginationLaben">
                    <div className="lbnTotal">
                        <Database className='lbnTotalIcon' />
                        <span>
                            Total:
                        </span>
                        <span>
                            {users.length}
                        </span>
                    </div>
                    <div className="pagination">
                        <div className="arrowsPage"></div>
                        <div className="numbersPage">
                            <div className="numberItem">
                                1
                            </div>

                        </div>
                        <div className="arrowsPage"></div>
                    </div>
                </div>

                {showRoleDialog && (
                    <div className={`dialog-backdrop ${isVisible ? 'fade-in' : 'fade-out'}`}>
                        <div className="dialog-box">
                            <h3>Role</h3>

                            {/* <select multiple={true} value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)} required className="roleOptions h-10 px-2 rounded border">
                            <option value="" >Selecione</option>
                            {roles.map(role => (
                                <option style={{ textTransform: "capitalize" }} key={role.id} value={role.name}>{role.name}</option>
                            ))}
                        </select> */}

                            <MultiCheckboxDropdown
                                label="Role:"
                                options={frameworks}
                                selected={selected}
                                onChange={setSelected}
                            />
                            <div className="lineDeviderFormCreate">

                            </div>


                            <div className="buttonAddCancel">

                                <button onClick={() => closeDialog(lbnDialogs.role.user)}>{t('cancel')}</button>
                                <button onClick={assignRole}><Check className='iconButtonCreate' /><span>{t('save')}</span></button>
                            </div>

                        </div>
                    </div>
                )}


                {showPermissionDialog && (
                    <div className={`dialog-backdrop ${isVisible ? 'fade-in' : 'fade-out'}`}>
                        <div className="dialog-box">
                            <h3>Permissão</h3>
                            <select value={selectedPermission} onChange={(e) => setSelectedPermission(e.target.value)} required className="roleOptions h-10 px-2 rounded border">
                                <option value="">{t('select')}</option>
                                {permissions.map(p => (
                                    <option style={{ textTransform: "capitalize" }} key={p.id} value={p.name}>{p.name.split(".").length > 1 ? p.name.split(".")[1] : p.name}</option>
                                ))}
                            </select>
                            <div className="buttonAddCancel">
                                <button onClick={() => closeDialog(lbnDialogs.permitions.user)}>{t('cancel')}</button>
                                <button onClick={assignPermission}>Atribuir</button>

                            </div>
                        </div>
                    </div>
                )}

                {showNewUserDialog && (
                    <div className={`dialog-backdrop ${isVisible ? 'fade-in' : 'fade-out'}`}>
                        <div className="dialog-box">
                            <h3>{t('new')}</h3>
                            <div className="lineDeviderFormCreate">

                            </div>
                            <div className='containerForm'>

                                <form onSubmit={handleSubmit} className='formUserd'>


                                    <label>{t('full_name')}</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={user.name}
                                        onChange={handleChange}
                                        required
                                        style={inputStyle}
                                        placeholder='nome apelido'
                                    />

                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={user.email}
                                        onChange={handleChange}
                                        required
                                        style={inputStyle}
                                        placeholder='example@example.com'
                                    />

                                    <label>{t('password')}</label>
                                    <div className="inputPassAdd">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            value={user.password}
                                            onChange={handleChange}
                                            required
                                            style={inputStyle}
                                            placeholder='*********'
                                        />
                                        <div
                                            onClick={togglePassword}
                                            className='eyeHiden'
                                        >
                                            {showPassword ? <EyeOff className='eyeHidenIcon' /> : <Eye className='eyeHidenIcon' />}
                                        </div>
                                    </div>

                                    <div className="lineDeviderFormCreate">

                                    </div>
                                    <div className="buttonAddCancel">

                                        <button type='button' onClick={() => {
                                            closeDialog(lbnDialogs.user.new)
                                        }}>{t('cancel')}</button>
                                        <button type="submit" ><UserRound className='iconButtonCreate' /><span>{t('save')}</span></button>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

const inputStyle: React.CSSProperties = {
    padding: '8px',
    fontSize: '14px',


};



export default UserList;


