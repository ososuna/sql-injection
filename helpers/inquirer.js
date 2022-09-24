const inquirer = require('inquirer');
require('colors');

const questions = [
	{
		type: 'list',
		name: 'option',
		message: 'Enter an option',
		choices: [
			{
				value: '1',
				name: `${'1.'.green} New customer`
			},
			{
				value: '2',
				name: `${'2.'.green} New book`
			},
			{
				value: '3',
				name: `${'3.'.green} New bookshelf`
			},
			{
				value: '4',
				name: `${'4.'.green} List customers`
			},
			{
				value: '5',
				name: `${'5.'.green} List books`
			},
			{
				value: '6',
				name: `${'6.'.green} List bookshelves`
			},
			{
				value: '0',
				name: `${'0.'.green} Log out`
			},
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

const inquirerMenu = async() => {
	console.clear();
	console.log('======================'.green);
	console.log('Select an option'.white);
	console.log('======================\n'.green);
	const { option } = await inquirer.prompt( questions );
	return option;
}

const pause = async() => {
	await inquirer.prompt( questionPause );
}

const readInput = async( message ) => {
	const question = [
		{
			type: 'input',
			name: 'desc',
			message,
			validate( value ) {
				if ( value.length === 0 ) {
					return 'Please enter a value';
				}
				return true;
			}
		}
	];
	const { desc } = await inquirer.prompt( question );
	return desc;
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
	inquirerMenu,
	pause,
	readInput,
	confirm
}
