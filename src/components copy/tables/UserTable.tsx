import type React from "react";
import { Pencil, Trash2, Eye } from "lucide-react";


interface User {
    id: number;
    name: string;
    email: string;
    number: string;
    role: string;
    status: "Ativo" | "Inativo";
}

const UserTable: React.FC = () => {
    const users: User[] = [
        { id: 1, name: "Ana Silva", email: "ana@exemplo.com", number: "842233110", role: "Admin", status: "Ativo" },
        { id: 2, name: "Carlos Mendes", email: "carlos@exemplo.com", number: "842233111", role: "Editor", status: "Inativo" },
        { id: 3, name: "Maria José", email: "maria@exemplo.com", number: "842233112", role: "Viewer", status: "Ativo" },
        { id: 4, name: "João Pedro", email: "joao@exemplo.com", number: "842233113", role: "Editor", status: "Ativo" },
        { id: 5, name: "Luciana Lima", email: "luciana@exemplo.com", number: "842233114", role: "Admin", status: "Inativo" },
        { id: 6, name: "Tiago Costa", email: "tiago@exemplo.com", number: "842233115", role: "Viewer", status: "Ativo" },
        { id: 7, name: "Fernanda Rocha", email: "fernanda@exemplo.com", number: "842233116", role: "Editor", status: "Ativo" },
        { id: 8, name: "Ricardo Alves", email: "ricardo@exemplo.com", number: "842233117", role: "Admin", status: "Inativo" },
        { id: 9, name: "Patrícia Gomes", email: "patricia@exemplo.com", number: "842233118", role: "Viewer", status: "Ativo" },
        { id: 10, name: "André Pinto", email: "andre@exemplo.com", number: "842233119", role: "Editor", status: "Ativo" },
    ];

    return (
        <>
            <div className="tableContainer">
                <h2>Lista de Usuários</h2>
                <table className="userTable">
                    <thead>
                        <tr>
                            {/* <th>ID</th> */}
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Contacto</th>
                            <th>Função</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="tableRow">
                                {/* <td>{user.id}</td> */}
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.number}</td>
                                <td>{user.role}</td>
                                <td>
                                    <span className={`status ${user.status === "Ativo" ? "active" : "inactive"}`}>
                                        <span>
                                            {user.status}
                                        </span>

                                    </span>
                                </td>
                                <td className="actions">
                                    <button className="action-btn refresh" title="Atualizar">
                                        <Eye size={16} />
                                    </button>
                                    <button className="action-btn edit" title="Editar">
                                        <Pencil size={16} />
                                    </button>
                                    <button className="action-btn delete" title="Apagar">
                                        <Trash2 size={16} />
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                

            </div>
        </>
    )
}

export default UserTable;