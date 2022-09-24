const { dbConnection } = require('./database/config');

const main = async () => {
  dbConnection();
}

main();
