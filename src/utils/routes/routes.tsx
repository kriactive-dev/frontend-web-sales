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
    dahsboardAnalitics: "analitics",
    profile: '/profile/:id',
    drop: '/drop-down-use',
    dropmulti: '/drop-multi-down-use',
    dropmulticheck: '/drop-check-multi-down-use',
    graph: {
      linear: "/graphlinear"
    },
    settings: {
      user_settings: "settings-user"
    },
    tests: {
      language: "/languages",
      mode: "/mode"
    }
  };
  
  export default routes;
  