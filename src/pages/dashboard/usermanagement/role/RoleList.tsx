import axios from "axios";
import type React from "react";
import { useState, useEffect } from "react";
import urls from "../../../../utils/apis/apis";
import { Pencil, Trash2, Eye } from "lucide-react";
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

    useEffect(() => {
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

        fetchRoles();
    }, []);

    if (loading) return <div className="containerLoader">
        <div className="loader"></div>
    </div>;

    return (
        <div className="tableContainer">
            <h2>Lista de Roles</h2>
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
                                <button className="action-btn edit" title="Editar">
                                    <Pencil size={16} className="btnUpdate" />
                                </button>
                                <button className="action-btn delete" title="Apagar">
                                    <Trash2 size={16} className="btnTrash" />
                                </button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
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