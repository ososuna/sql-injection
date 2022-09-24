const { dbConnection } = require('./database/config');
const { inquirerMenuAuth, inquirerMenuHome, pause, readInput, confirm } = require('./helpers/inquirer');

const db = dbConnection();

const main = async () => {
  auth();
}

const auth = async () => {
  let opt = '';
  do {
    console.log('\n');
    opt = await inquirerMenuAuth();
    switch ( opt ) {
      case '1':
        const email = await readInput('Email:');
        const password = await readInput('Password:');
        db.query(
          'SELECT * FROM `user` WHERE `email` = ? AND `password` = ?',
          [ email, password ],
          ( err, results ) => {
            if( results.length === 0 ) {
              console.log('\nInvalid credentials'.red);
            } else {
              opt = '0';
              home();
            }
          }
        );
        break;
      case '2':
        console.clear();
        console.log('Bye!');
        process.exit( 0 );
      default:
        break;
    }
    if( opt !== '0' ) await pause();
  } while ( opt !== '0' );
}

const home = async () => {
  let opt = '';
  do {
    console.log('\n');
    opt = await inquirerMenuHome();
    switch ( opt ) {
      case '1':
        const title = await readInput('Title:');
        const author = await readInput('Author:');
        db.query(
          'INSERT INTO `book` (title, author, bookshelf_id, customer_id) VALUES (?, ?, 1, 1)',
          [ title, author ],
          ( err, results ) => {
            if( err ) throw err;
            console.log('Book added!'.green);
          }
        );
        break;
      case '2':
        db.query(
          'SELECT * FROM `book`',
          ( err, results ) => {
            if( results.length === 0 ) {
              console.log('\nNo books added yet'.red);
            } else {
              console.log( results );
            }
          }
        );
        break;
      case '3':
        console.log('third option');
        break;
      case '4':
        opt = '0';
        auth();
        break;
      default:
        break;
    }
    if( opt !== '0' ) await pause();
  } while ( opt !== '0' );
}

main();
