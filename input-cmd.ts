import { Interface, createInterface } from 'node:readline';
import { IMaqeRobot } from './interfaces/maqe-robot.interface';
import { maqeRobot } from './maqe-robot';


const rl: Interface = createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`Commands Input : `, (input: string) => {
    const result: IMaqeRobot = maqeRobot(input);
    console.log(`X: ${result.position[0]} Y: ${result.position[1]} Direction: ${result.direction}`);
    rl.close();
});