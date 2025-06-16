import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pencil, Trash2, Eye } from "lucide-react";
import urls from '../../../../utils/apis/apis';
interface Role {
    id: number;
    name: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    created_at: string;
    roles: Role[];
}

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
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
    }, []);

    if (loading) return <div className="containerLoader">
        <div className="loader"></div>
    </div>;
    if (error) return <p>{error}</p>;

    return (
        <div className="tableContainer">
            <h2>Lista de Usuários</h2>
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
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{new Date(user.created_at).toLocaleDateString()}</td>
                            <td>{user.roles.map(role => role.name).join(', ')}</td>
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
};

export default UserList;


