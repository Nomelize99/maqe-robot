import { IMaqeRobot } from "./interfaces/maqe-robot.interface";
import { maqeRobot } from "./maqe-robot";

describe('method maqeRobot', () => {
    test('case RW15RW1', () => { //R W15 R W1
        const actualData: IMaqeRobot = maqeRobot('RW15RW1');
        expect(actualData.direction).toEqual('South');
        expect(actualData.position).toEqual([15, -1]);
    });

    test('case W5RW5RW2RW1R', () => { //W5 R W5 R W2 R W1 R
        const actualData: IMaqeRobot = maqeRobot('W5RW5RW2RW1R');
        expect(actualData.direction).toEqual('North');
        expect(actualData.position).toEqual([4, 3]);
    });

    test('case RRW11RLLW19RRW12LW1', () => { //R R W11 R L L W19 R R W12 L W1
        const actualData: IMaqeRobot = maqeRobot('RRW11RLLW19RRW12LW1');
        expect(actualData.direction).toEqual('South');
        expect(actualData.position).toEqual([7, -12]);
    });

    test('case LLW100W50RW200W10', () => { //L L W100 W50 R W200 W10
        const actualData: IMaqeRobot = maqeRobot('LLW100W50RW200W10');
        expect(actualData.direction).toEqual('West');
        expect(actualData.position).toEqual([-210, -150]);
    });

    test('case LLLLLW99RRRRRW88LLLRL', () => { //L L L L L W99 R R R R R W88 L L L R L
        const actualData: IMaqeRobot = maqeRobot('LLLLLW99RRRRRW88LLLRL');
        expect(actualData.direction).toEqual('East');
        expect(actualData.position).toEqual([-99, 88]);
    });

    test('case W55555RW555555W444444W1', () => { //W55555 R W555555 W444444 W1
        const actualData: IMaqeRobot = maqeRobot('W55555RW555555W444444W1');
        expect(actualData.direction).toEqual('East');
        expect(actualData.position).toEqual([1000000, 55555]);
    });

});
