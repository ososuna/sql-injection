const mysql = require('mysql2');

const dbConnection = () => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'library'
  });
  connection.connect((err) => {
    if ( err ) {
      console.log( err );
      throw new Error('Error connecting to database');
    }
  });
  return connection;
}

module.exports = {
  dbConnection
}
