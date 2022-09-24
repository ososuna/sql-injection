const login = ( db ) => {
  db.query(
    'SELECT * FROM `user`',
    ( err, results ) => 
      console.log( results )
  );
}

const logout = ( db ) => {
}

const signup = ( db ) => {
}

module.exports = {
  login,
  logout,
  signup
}
