import axios from "axios";
import type React from "react";
import { useState, useEffect } from "react";
import urls from "../../../../utils/apis/apis";
import { Pencil, Trash2, Eye, Plus } from "lucide-react";
import { toast } from "react-toastify"
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

const getRolesWithPermissions = async () => {
    const response = await axios.get(urls.roles);
    return response.data;
};

const RoleList: React.FC = () => {
    const [roles, setRoles] = useState<Role[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [nameRole, setNameRole] = useState<string>('')
    const [nameRoleUpdate, setNameRoleUpdate] = useState<string>('')
    const [showRoleDialog, setShowRoleDialog] = useState(false);
    const [showRoleDialogUpdate, setShowRoleDialogUpdate] = useState(false)
    const [idRole, setIdRole] = useState<number>(0)
    const sendRole = async (name: string) => {

        setLoading(true)
        if (name != '') {
            try {
                await axios.post(urls.roles, {
                    "name": name
                });

                toast.success('Role cadastrado com sucesso!')

                setNameRole('')
                setShowRoleDialog(false)
                fetchRoles()
            } catch (error) {
                console.error('Erro ao salvar:', error);
                toast.error('Erro ao salvar!')
            } finally {
                setLoading(false)
            }
        } else {
            toast.info("Preencha todos os campos")
        }

    };

    const sendRoleUpdate = async (name: string) => {

        setLoading(true)
        if (name != '' && idRole != 0) {
            try {
                await axios.put(`${urls.roles}/${idRole}`, {
                    "name": name
                });

                toast.success('Role atualizado com sucesso!')

                setNameRoleUpdate('')
                setShowRoleDialogUpdate(false)
                fetchRoles()
            } catch (error) {
                console.error('Erro ao salvar:', error);
                toast.error('Erro ao salvar!')
            } finally {
                setLoading(false)
            }
        } else {
            toast.info("Preencha todos os campos")
        }

    };

    const fetchRoles = async () => {
        try {
            const data = await getRolesWithPermissions();
            setRoles(data);
        } catch (error) {
            console.error("Erro ao buscar roles:", error);
        } finally {
            setLoading(false);
        }
    };

    const deleteRole = async () => {
        setLoading(true)
        try {
            await axios.delete(`${urls.roles}/${idRole}`)
            toast.success("Role removida com sucesso.")
            fetchRoles()
        } catch (e) {
            toast.error("Erro ao apagar")
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {


        fetchRoles();
    }, []);

    if (loading) return <div className="containerLoader">
        <div className="loader"></div>
    </div>;

    return (

        <div className="tableContainer">
            <div className="headerTableList">
                <h2>Lista de Roles</h2>
                <button className="action-btn" title="Novo usuário" onClick={() => {
                    setShowRoleDialog(true)
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
                            <th>permissões</th>
                            <th>Data de Criação</th>

                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.permissions.length > 0 ? (
                                    // <ul className="permissionsList">
                                    //     {user.permissions.map((permission) => {
                                    //         const parts = permission.name.split(".");
                                    //         const action = parts.length > 1 ? parts[1] : permission.name; // pega só o 'view', 'create'...
                                    //         return <li key={permission.id}>{action}</li>;
                                    //     })}
                                    // </ul>
                                    <ul className="permissionsList">
                                        {user.permissions.slice(0, 3).map((permission) => {
                                            const parts = permission.name.split(".");
                                            const action = parts.length > 1 ? parts[1] : permission.name;
                                            return <li key={permission.id}>{action}</li>;
                                        })}
                                        {user.permissions.length > 3 && <li>...</li>}
                                    </ul>

                                ) : (
                                    <p className="text-sm text-gray-400">Sem permissões atribuídas.</p>
                                )}</td>

                                <td>{new Date(user.created_at).toLocaleDateString()}</td>

                                <td className="actions">
                                    <button className="action-btn refresh" title="Detalhes">
                                        <Eye size={16} className="btnDetails" />
                                    </button>
                                    <button className="action-btn edit" title="Editar" onClick={() => {
                                        setIdRole(user.id)
                                        setNameRoleUpdate(user.name)
                                        setShowRoleDialogUpdate(true)
                                    }}>
                                        <Pencil size={16} className="btnUpdate" />
                                    </button>
                                    <button className="action-btn delete" title="Apagar" onClick={
                                        () => {
                                            setIdRole(user.id)
                                            deleteRole()
                                        }
                                    }>
                                        <Trash2 size={16} className="btnTrash" />
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {showRoleDialog && (
                    <div className="dialog-backdrop">
                        <div className="dialog-box">
                            <h3>Nova Role</h3>
                            <input placeholder="Nome da role" type="text" value={nameRole} onChange={(e) => {
                                setNameRole(e.target.value)
                            }} className="roleOptions h-10 px-2 rounded border" style={{ cursor: "auto" }} />
                            <div className="buttonAddCancel">
                                <button onClick={() => {
                                    sendRole(nameRole)
                                }}>Salvar</button>
                                <button onClick={() => setShowRoleDialog(false)}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                )}

                {showRoleDialogUpdate && (
                    <div className="dialog-backdrop">
                        <div className="dialog-box">
                            <h3>Atualizar Role</h3>
                            <input placeholder="Nome da role" type="text" value={nameRoleUpdate} onChange={(e) => {
                                setNameRoleUpdate(e.target.value)
                            }} className="roleOptions h-10 px-2 rounded border" style={{ cursor: "auto" }} />
                            <div className="buttonAddCancel">
                                <button onClick={() => {
                                    sendRoleUpdate(nameRoleUpdate)
                                }}>Atualizar</button>
                                <button onClick={() => setShowRoleDialogUpdate(false)}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
    // return (
    //     <div className="p-4">
    //         <h1 className="text-xl font-bold mb-4">Lista de Roles</h1>
    //         {roles.map((role) => (
    //             <div key={role.id} className="mb-6 border p-4 rounded shadow">
    //                 <h2 className="text-lg font-semibold">{role.name}</h2>
    //                 <p className="text-sm text-gray-500">Guard: {role.guard_name}</p>
    //                 <p className="mt-2 font-medium">Permissões:</p>
    // {role.permissions.length > 0 ? (
    //     <ul className="list-disc list-inside">
    //         {role.permissions.map((permission) => (
    //             <li key={permission.id}>
    //                 {permission.name} ({permission.guard_name})
    //             </li>
    //         ))}
    //     </ul>
    // ) : (
    //     <p className="text-sm text-gray-400">Sem permissões atribuídas.</p>
    // )}
    //             </div>
    //         ))}
    //     </div>
    // );
};

export default RoleList;