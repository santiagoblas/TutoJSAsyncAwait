const {taskOne, taskTwo} = require('./tasks');

async function main() {
    console.time('Midiendo el tiempo');
    const t1 = await taskOne();
    const t2 = await taskTwo();
    console.timeEnd('Midiendo el tiempo');

    console.log('T1:', t1);
    console.log('T2:', t2);
}

main();