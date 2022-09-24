const { dbConnection } = require('./database/config');
const { inquirerMenu, pause, readInput, confirm } = require('./helpers/inquirer');

const main = async () => {
  const db = dbConnection();
  let opt = '';
  do {
    console.log('\n');
    opt = await inquirerMenu();
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
        break;
      default:
        break;
    }
    if( opt !== '0' ) await pause();
  } while ( opt !== '0' );
}

main();
