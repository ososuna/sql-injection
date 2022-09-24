const { dbConnection } = require('./database/config');
const { inquirerMenuAuth, pause, readInput, confirm } = require('./helpers/inquirer');

const main = async () => {
  const db = dbConnection();
  let opt = '';
  do {
    console.log('\n');
    opt = await inquirerMenuAuth();
    switch ( opt ) {
      case '0':
        console.clear();
        console.log('Bye!');
        process.exit( 0 );
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
        break;
      default:
        break;
    }
    if( opt !== '0' ) await pause();
  } while ( opt !== '0' );
}

main();
