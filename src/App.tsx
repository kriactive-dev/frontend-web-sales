import './App.css'
import './index.css'
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router-dom';
import routes from './utils/routes/routes';
import Default from './pages/dashboard/dashboard/default/Default';
import UserList from './pages/dashboard/usermanagement/user/UserList';
import RoleList from './pages/dashboard/usermanagement/role/RoleList';
import PermissionList from './pages/dashboard/usermanagement/permission/PermissionList';




function App() {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.dashboard} element={<Dashboard />}>
          <Route path={routes.userList} element={<UserList />} />
          <Route path={routes.permissions} element={<PermissionList />} />
          <Route path={routes.roles} element={<RoleList />} />
          <Route path={routes.dahsboardDefault} element={<Default />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
//Apis, http://143.198.159.11:9000/api/users