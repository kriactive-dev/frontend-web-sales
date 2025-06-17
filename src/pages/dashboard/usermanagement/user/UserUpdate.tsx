import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import urls from '../../../../utils/apis/apis';

interface User {
  name: string;
  email: string;
  password: string;
}

const UserUpdate: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({ name: '', email: '', password: '' });

  // Buscar usuário pelo ID
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${urls.user}/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        alert('Erro ao carregar usuário!');
      }
    };

    if (id) fetchUser();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.put(`${urls.user}/${id}`, user);
      alert('Usuário atualizado com sucesso!');
      navigate(`/dashboard/user/lista`);
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      alert('Erro ao atualizar usuário!');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Editar Usuário</h2>

      <label>Nome:</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <label>Senha:</label>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        // required
        style={inputStyle}
      />

      <button type="submit" style={buttonStyle}>Atualizar</button>
    </form>
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
  fontSize: '1rem',
};

const buttonStyle: React.CSSProperties = {
  padding: '10px',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default UserUpdate;


