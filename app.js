const { dbConnection } = require('./database/config');

const main = async () => {
  const db = dbConnection();
  db.query(
    'SELECT * FROM `user`',
    ( err, results ) => 
      console.log( results )
  );
}

main();
