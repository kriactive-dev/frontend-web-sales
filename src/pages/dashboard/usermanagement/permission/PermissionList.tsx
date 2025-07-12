import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pencil, Trash2, Eye, Plus, Database } from "lucide-react";
import urls from '../../../../utils/apis/apis';

import { toast } from 'react-toastify'


interface Permissions {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

const PermissionList: React.FC = () => {
    const [users, setUsers] = useState<Permissions[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [namePermissions, setNamePermissions] = useState<string>('')
    const [showPermissionDialog, setShowPermissionDialog] = useState(false);
    const [namePermissionUpdate, setNamePermissionUpdate] = useState<string>('')
    const [showPermissionDialogUpdate, setShowPermissionDialogUpdate] = useState(false)
    const [idPermission, setIdPermission] = useState<number>(0)


    const permissionsView = async () => {
        axios.get<Permissions[]>(urls.permissions)
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao buscar usuários:', error);
                setError('Erro ao carregar dados.');
                setLoading(false);
            });
    }

    const sendPermission = async (name: string) => {

        setLoading(true)
        if (name != '') {
            try {
                await axios.post(urls.permissions, {
                    "name": name
                });

                toast.success('Permissão cadastrado com sucesso!')

                setNamePermissions('')
                setShowPermissionDialog(false)
                permissionsView()
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

    const sendPermissionUpdate = async (name: string) => {

        setLoading(true)
        if (name != '' && idPermission != 0) {
            try {
                await axios.put(`${urls.permissions}/${idPermission}`, {
                    "name": name
                });

                toast.success('Permissão atualizado com sucesso!')

                setNamePermissionUpdate('')
                setShowPermissionDialogUpdate(false)
                permissionsView()
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

    const deletePermission = async () => {
        setLoading(true)
        try {
            await axios.delete(`${urls.permissions}/${idPermission}`)
            toast.success("Permissão removida com sucesso.")
            permissionsView()
        } catch (e) {
            toast.error("Erro ao apagar")
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        permissionsView()
    }, []);

    if (loading) return <div className="containerLoader">
        <div className="loader"></div>
    </div>;
    if (error) return <p>{error}</p>;

    return (
        <div className="tableContainer">
            <div className="headerTableList">
                <h2>Lista de Permissões</h2>
                <button className="action-btn" title="Novo usuário" onClick={() => {
                    setShowPermissionDialog(true)
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
                            <th>Data de Criação</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="tableRow">
                                <td>{user.id}</td>
                                <td>{user.name.split(".").length > 1 ? user.name.split(".")[1] : user.name}</td>
                                <td>{new Date(user.created_at).toLocaleDateString()}</td>

                                <td className="actions">
                                    <button className="action-btn refresh" title="Detalhes">
                                        <Eye size={16} className="btnDetails" />
                                    </button>
                                    <button className="action-btn edit" title="Editar" onClick={
                                        () => {
                                            setIdPermission(user.id)
                                            setNamePermissionUpdate(user.name)
                                            setShowPermissionDialogUpdate(true)
                                        }
                                    }>
                                        <Pencil size={16} className="btnUpdate" />
                                    </button>
                                    <button className="action-btn delete" title="Apagar" onClick={
                                        () => {
                                            setIdPermission(user.id)
                                            deletePermission()
                                        }
                                    }>
                                        <Trash2 size={16} className="btnTrash" />
                                    </button>

                                </td>
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


            {showPermissionDialog && (
                <div className="dialog-backdrop">
                    <div className="dialog-box">
                        <h3>Nova Permissão</h3>
                        <input placeholder='Nome da permissão' type="text" value={namePermissions} onChange={(e) => {
                            setNamePermissions(e.target.value)
                        }} className="roleOptions h-10 px-2 rounded border" style={{ cursor: "auto" }} />
                        <div className="buttonAddCancel">
                            <button onClick={() => {
                                sendPermission(namePermissions)
                            }}>Salvar</button>
                            <button onClick={() => setShowPermissionDialog(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}

            {showPermissionDialogUpdate && (
                <div className="dialog-backdrop">
                    <div className="dialog-box">
                        <h3>Atualizar Permissão</h3>
                        <input placeholder="Nome da role" type="text" value={namePermissionUpdate} onChange={(e) => {
                            setNamePermissionUpdate(e.target.value)
                        }} className="roleOptions h-10 px-2 rounded border" style={{ cursor: "auto" }} />
                        <div className="buttonAddCancel">
                            <button onClick={() => {
                                sendPermissionUpdate(namePermissionUpdate)
                            }}>Atualizar</button>
                            <button onClick={() => setShowPermissionDialogUpdate(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PermissionList;




