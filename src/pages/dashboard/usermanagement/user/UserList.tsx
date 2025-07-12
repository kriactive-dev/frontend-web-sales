import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pencil, Trash2, Eye, ShieldCheck, UserCheck, Plus } from "lucide-react";
import urls from '../../../../utils/apis/apis';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
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

const UserList: React.FC = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState<User[]>([]);
    const [roles, setRoles] = useState<Role[]>([]);
    const [permissions, setPermissions] = useState<Permissions[]>([]);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [selectedRole, setSelectedRole] = useState<string>("");
    const [selectedPermission, setSelectedPermission] = useState<string>("");
    const [showRoleDialog, setShowRoleDialog] = useState(false);
    const [showPermissionDialog, setShowPermissionDialog] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const handleClickSucess = () => {
        toast.success('Sucesso!');
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

    useEffect(() => {
        loadData()
    }, []);

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


    if (loading) return <div className="containerLoader">
        <div className="loader"></div>
    </div>;
    if (error) return <p>{error}</p>;

    return (
        <div className="tableContainer">
            <div className="dialog"></div>
            <div className="headerTableList">
                <h2>Lista de Usuários</h2>
                <button className="action-btn" title="Novo usuário" onClick={() => {
                    navigate("/dashboard/user/novo")
                }}>
                    <Plus size={16} className='iconPlusUser' />
                    <span>Novo</span>
                </button>
            </div>
            <div className="containerTable">
                <table className="userTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Data de Criação</th>
                            <th>Funções</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="tableRow">
                                <td>{user.id}</td>
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
                                        setShowPermissionDialog(true);
                                    }}>
                                        <ShieldCheck className="btnPermission" size={16} />
                                    </button>
                                    <button className="action-btn" title="Atribuir Função" onClick={() => {
                                        setSelectedUserId(user.id);
                                        setShowRoleDialog(true);
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

            {showRoleDialog && (
                <div className="dialog-backdrop">
                    <div className="dialog-box">
                        <h3>Atribuir Role</h3>
                        <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)} required className="roleOptions h-10 px-2 rounded border">
                            <option value="" >Selecione</option>
                            {roles.map(role => (
                                <option style={{ textTransform: "capitalize" }} key={role.id} value={role.name}>{role.name}</option>
                            ))}
                        </select>
                        <div className="buttonAddCancel">
                            <button onClick={assignRole}>Atribuir</button>
                            <button onClick={() => setShowRoleDialog(false)}>Cancelar</button>
                        </div>

                    </div>
                </div>
            )}


            {showPermissionDialog && (
                <div className="dialog-backdrop">
                    <div className="dialog-box">
                        <h3>Atribuir Permissão</h3>
                        <select value={selectedPermission} onChange={(e) => setSelectedPermission(e.target.value)} required className="roleOptions h-10 px-2 rounded border">
                            <option value="">Selecione</option>
                            {permissions.map(p => (
                                <option style={{ textTransform: "capitalize" }} key={p.id} value={p.name}>{p.name.split(".").length > 1 ? p.name.split(".")[1] : p.name}</option>
                            ))}
                        </select>
                        <div className="buttonAddCancel">
                            <button onClick={assignPermission}>Atribuir</button>
                            <button onClick={() => setShowPermissionDialog(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserList;


