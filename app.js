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
        console.log('first option');
        break;
      case '2':
        console.log('second option');
        break;
      case '3':
        console.log('third option');
        break;
      case '4':
        console.log('fourth option');
        break;
      case '5':
        console.log('fifth option');
        break;
      case '6':
        console.log('sixth option');
        break;
      case '7':
        console.log('log out');
        break;
      default:
        break;
    }
    if( opt !== '0' ) await pause();
  } while ( opt !== '0' );
}

main();
