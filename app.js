const { dbConnection } = require('./database/config');
const { getUsers } = require('./helpers/user');

const main = async () => {
  const db = dbConnection();
  getUsers( db );
}

main();
