import { IMaqeRobot } from "./interfaces/maqe-robot.interface";

function mappingDirection(direction: number): 'North' | 'East' | 'South' | 'West' | undefined {
    switch (direction) {
        case 0:
            return 'North';
        case 1:
            return 'East';
        case 2:
            return 'South';
        case 3:
            return 'West';
    }
}

export function maqeRobot(fullCommands: string): IMaqeRobot {
    const commands: string[] = fullCommands.match(/(R|L|W\d+)/g)!;
    let currentDirection: number = 0;
    const position: number[] = [ 0, 0 ];
    for(const command of commands){
        if(command === 'R'){
            currentDirection = (++currentDirection) % 4;
        }
        else if(command === 'L'){
            currentDirection = (--currentDirection + 4) % 4;
        }
        else if(command.startsWith('W')){
            const step: number = Number(command.replace('W', ''));
            if(currentDirection === 0){
                position[1] += step;
            }
            else if(currentDirection === 1){
                position[0] += step;
            }
            else if(currentDirection === 2){
                position[1] -= step;
            }
            else if(currentDirection === 3){
                position[0] -= step;
            }
        }
    }
    return {
        direction: mappingDirection(currentDirection),
        position
    };
}