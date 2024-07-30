const readline = require('node:readline');
const { maqeRobot } = require('./maqe-robot');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`Commands Input : `, input => {
    const result = maqeRobot(input);
    console.log(`X: ${result.position[0]} Y: ${result.position[1]} Direction: ${result.direction}`);
    rl.close();
});