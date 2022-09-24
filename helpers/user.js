const getUsers = ( db ) => {
  db.query(
    'SELECT * FROM `user`',
    ( err, results ) => 
      console.log( results )
  );
}

module.exports = {
  getUsers
}
