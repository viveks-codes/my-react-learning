// ill use dot env and prompt-sync here
require('dotenv').config();
console.log(process.env.a);

const a = parseInt(process.env.a);
const b = parseInt(process.argv[2]);
console.log(a + b);

if (a > b) {
    console.log('a is > b');
} else {
    console.log('b is > a');
}

// choice and switch case
const choice = require('prompt-sync')({sigint: true});
switch (choice) {
    case '1':
        console.log('Selected 1');
        break;
    case '2':
        console.log('Selected 2');
        break;
    case '3':
        console.log('Selected 3');
        break;
    default:
        console.log('Invalid choice');
        break;
}



// # readline module
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('What is your name? ', (name) => {
    console.log(`Hi ${name}!`);
    rl.close();
}
);