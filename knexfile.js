// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/payfazz-backend-test'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/payfazz-backend-test-spec'
  },
  
};
