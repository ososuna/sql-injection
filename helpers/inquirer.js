const inquirer = require('inquirer');
require('colors');

const questionsAuth = [
	{
		type: 'list',
		name: 'option',
		message: 'Enter an option',
		choices: [
			{
				value: '1',
				name: `${'1.'.green} Log in`
			},
			{
				value: '2',
				name: `${'2.'.green} Exit`
			}
		]
	}
];

const questionsHome = [
	{
		type: 'list',
		name: 'option',
		message: 'Enter an option',
		choices: [
			{
				value: '1',
				name: `${'1.'.green} New book`
			},
			{
				value: '2',
				name: `${'2.'.green} List books`
			},
			{
				value: '3',
				name: `${'3.'.green} Delete book`
			},
			{
				value: '4',
				name: `${'4.'.green} Log out`
			}
		]
	}
];

const questionPause = [
	{
		type: 'input',
		name: 'pause',
		message: `Press ${ 'enter'.rainbow } to continue`
	}
];

const inquirerMenuAuth = async() => {
	console.clear();
	console.log('======================'.green);
	console.log('Welcome to My Library!'.white);
	console.log('======================\n'.green);
	const { option } = await inquirer.prompt( questionsAuth );
	return option;
}

const inquirerMenuHome = async() => {
	console.clear();
	console.log('======================'.green);
	console.log('My Library'.white);
	console.log('======================\n'.green);
	const { option } = await inquirer.prompt( questionsHome );
	return option;
}

const pause = async() => {
	await inquirer.prompt( questionPause );
}

const isQuery = ( str = '' ) => {
	return str.toUpperCase().includes('SELECT')
		|| str.toUpperCase().includes('DELETE')
		|| str.toUpperCase().includes('UPDATE')
		|| str.toUpperCase().includes('INSERT');
}

const readInput = async( db, message) => {
	
	const question = [
		{
			type: 'input',
			name: 'value',
			message,
			validate( value ) {
				if ( value.length === 0 ) {
					return 'Please enter a value';
				}
				if (isQuery( value )) {
					try {
						db.query(
							value,
							( err, results ) => {
								if ( results ) {
									console.log( results );
								}
							}
						);
					} catch ( error ) {
						console.log( error );
					}
				}
				return true;
			}
		}
	];
	const { value } = await inquirer.prompt( question );
	return value;
}


const confirm = async( message ) => {
	const question = [
		{
			type: 'confirm',
			name: 'ok',
			message
		}
	];
	const { ok } = await inquirer.prompt( question );
	return ok;
}

module.exports = {
	inquirerMenuAuth,
	inquirerMenuHome,
	pause,
	readInput,
	confirm
}
