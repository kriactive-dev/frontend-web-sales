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
import UserNew from './pages/dashboard/usermanagement/user/UserNew';
import UserUpdate from './pages/dashboard/usermanagement/user/UserUpdate';
import UseDrop from './components/drop/UseDrop';
import UseMulti from './components/drop/UseMulti';
import UseMultiCheck from './components/drop/UseMultiCheck';
import AreaChartComponent from './components/graph/AreaChartComponent';
import { ToastContainer } from 'react-toastify';
import Language from './pages/tests/languages/Language';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <>
     <ToastContainer />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.drop} element={<UseDrop />} />
        <Route path={routes.tests.language} element={<Language />} />
        <Route path={routes.dropmulticheck} element={<UseMultiCheck />} />
        <Route path={routes.dropmulti} element={<UseMulti />} />
        <Route path={routes.graph.linear} element={<AreaChartComponent />} />
        <Route path={routes.dashboard} element={<Dashboard />}>
          <Route path={routes.user.list} element={<UserList />} />
          <Route path={routes.user.new} element={<UserNew />} />
          <Route path={routes.user.update} element={<UserUpdate />} />
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