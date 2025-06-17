import React, { useState, useEffect } from 'react';
import axios from 'axios';
import urls from '../../../../utils/apis/apis';

interface User {
  name: string;
  email: string;
  password: string;
}

const UserNew: React.FC = () => {
  const [user, setUser] = useState<User>({ name: '', email: '', password: '' });
  const [submitUser, setSubmitUser] = useState<User | null>(null);

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
        try {
          const response = await axios.post(urls.user, submitUser);
          console.log('Usuário cadastrado com sucesso:', response.data);
          alert('Usuário cadastrado com sucesso!');
          setUser({ name: '', email: '', password: '' });
        } catch (error) {
          console.error('Erro ao cadastrar usuário:', error);
          alert('Erro ao cadastrar usuário!');
        }
      }
    };

    sendUser();
  }, [submitUser]);

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Cadastro de Usuário</h2>

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
        required
        style={inputStyle}
      />

      <button type="submit" style={buttonStyle}>Cadastrar</button>
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
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default UserNew;
