import React, { useState, useEffect } from 'react';
import axios from 'axios';
import urls from '../../../../utils/apis/apis';
import { useNavigate } from 'react-router-dom';
import { Plus, X, List } from 'lucide-react';
import { toast } from 'react-toastify';
interface User {
  name: string;
  email: string;
  password: string;
}

const UserNew: React.FC = () => {
  const [user, setUser] = useState<User>({ name: '', email: '', password: '' });
  const [submitUser, setSubmitUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitUser(user);
  };

  useEffect(() => {
    const sendUser = async () => {
      if (submitUser) {
        setLoading(true)
        try {
          const response = await axios.post(urls.user, submitUser);
          console.log('Usuário cadastrado com sucesso:', response.data);
          toast.success('Usuário cadastrado com sucesso!')

          setUser({ name: '', email: '', password: '' });
        } catch (error) {
          console.error('Erro ao cadastrar usuário:', error);
          toast.success('Erro ao cadastrar usuário!')
        } finally {
          setLoading(false)
        }
      }
    };

    sendUser();
  }, [submitUser]);



  if (loading) return <div className="containerLoader">
    <div className="loader"></div>
  </div>;



  return (
    <>
      {/* <div className="titleUser">
    <h2>Cadastro de Usuário</h2>
    </div> */}

      <div className='containerForm'>

        <form onSubmit={handleSubmit} className='formUserd'>
          <div className="headerTableList">
            <h2>Adicionar novo usuário</h2>
            <button className="action-btn" title="Novo usuário" onClick={() => {
              navigate("/dashboard/user/lista")
            }}>
              <List size={16} className='iconPlusUser' />
              <span>Lista</span>
            </button>
          </div>

          <label>Nome Completo</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
            style={inputStyle}
            placeholder='Nome Apelido'
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            style={inputStyle}
            placeholder='Teste@teste.com'
          />

          <label>Senha</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            style={inputStyle}
            placeholder='*********'
          />

          <div className="btnRegister">
            <button onClick={() => {
              navigate("/dashboard/user/lista")
            }}><X className='iconButtonCreate' /><span>Cancelar</span></button>
            <button type="submit" ><Plus className='iconButtonCreate' /><span>Salvar</span></button>
          </div>

        </form>
      </div>
    </>
  );
};

// Estilos simples
const formStyle: React.CSSProperties = {
  maxWidth: '400px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const inputStyle: React.CSSProperties = {
  padding: '8px',
  fontSize: '14px',


};

const buttonStyle: React.CSSProperties = {
  padding: '10px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default UserNew;
