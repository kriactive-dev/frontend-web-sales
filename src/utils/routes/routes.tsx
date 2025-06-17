const routes = {
    home: '/',
    dashboard: '/dashboard',
    about: '/about',
    login: '/login',
    user: {
      list: 'user/lista',
      new: 'user/novo',
      detail: 'user/detalhes/:id',
      update: 'user/:id'
    },

    permissions: 'permissoes/lista',
    roles: 'roles/lista',
    dahsboardDefault: 'default',
    profile: '/profile/:id',
  };
  
  export default routes;
  