export default [
  {
    url: '/api/createUser',
    method: 'post',
    response: ({ body }) => {
      console.log('body>>>>>>>>', body);
      return {
        code: 0,
        message: 'ok',
        data: null,
      };
    },
  },
  {
    url: '/api/user',
    method: 'get',
    response: ({ body }) => {
      console.log('body>>>>>>>>', body);
      return {
        code: 0,
        message: 'ok',
        data: [{ id: 0, name: 'admin' }],
      };
    },
  },
];
