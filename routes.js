const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        const { name, location } = request.query;
        return `Hello, ${name} from ${location}`;
    },
 },
  {
    method : "*",
    path : "/",
    handler : (request, h) => {
      return 'Halaman tidak dapat diakses dengan method tersebut';
    }
  },
  {
      method: 'GET',
      path: '/about',
      handler: (request, h) => {
          return 'About page';
      },
  },
  {
    method : "*",
    path : "/{any*}",
    handler : (request, h) => {
      return 'Halaman tidak ditemukan';
    }
  },
  {
    method : "GET",
    path : "/users/{username?}",
    handler : (request, h) => {
       const {username = 'stranger'} = request.params
       return `Hello, ${username}`
    }
  },
  {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
       const { name = "stranger" } = request.params;
       const { lang } = request.query;

       if(lang === 'id') {
        return `Hai ${name}`
       }

       return `Hello, ${name}!`;
   },
  },
  {
    method : 'POST',
    path : '/login',
    handler : (request, h) => {
      const { username, password } = request.payload
      return `Welcome ${username}`
    }
  },
  {
    method : 'POST',
    path : '/user',
    handler : (request, h) => {
      return h.response('created').code(201)
    }
  }
];


module.exports = routes