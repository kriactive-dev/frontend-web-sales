import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { X, List, RefreshCw } from 'lucide-react';
import urls from '../../../../utils/apis/apis';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

interface User {
  name: string;
  email: string;
  password: string;
}

const UserUpdate: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User>({ name: '', email: '', password: '' });
  const {t} = useTranslation()


  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`${urls.user}/${id}`);
        setUser(response.data);
        // setLoading(false)
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        toast.error('Erro ao carregar usuário!')
       
      }finally{
        setLoading(false)
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
    setLoading(true)
    try {
      await axios.put(`${urls.user}/${id}`, user);
      // toast.success('Usuário atualizado com sucesso!')
      navigate(`/dashboard/user/lista`);
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      toast.error('Erro ao atualizar usuário!')
    }finally{
      setLoading(false)
    }
  };

  if (loading) return <div className="containerLoader">
  <div className="loader"></div>
</div>;


  return (
    <div className='containerForm'>
      <form onSubmit={handleSubmit} className='formUserd'>
        <div className="headerTableList">
          <h2>Editar Usuário</h2>
          <button className="action-btn" title="Novo usuário" onClick={() => {
            navigate("/dashboard/user/lista")
          }}>
            <List size={16} className='iconPlusUser' />
            <span>Lista</span>
          </button>
        </div>



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

        <label>{t('password')}:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          // required
          style={inputStyle}
        />

        <div className="btnRegister">
          <button onClick={() => {
            navigate("/dashboard/user/lista")
          }}><X className='iconButtonCreate' /><span>{t('cancel')}</span></button>
          <button type="submit" ><RefreshCw className='iconButtonCreate' /><span>Atualizar</span></button>
        </div>
      </form>
    </div>
  );
};


const inputStyle: React.CSSProperties = {
  padding: '8px',
  fontSize: '1rem',
};



export default UserUpdate;


