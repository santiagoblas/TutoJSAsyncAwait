const {taskOne, taskTwo} = require('./tasks');

async function main() {
    console.time('Midiendo el tiempo');
    const results = await Promise.all([taskOne(), taskTwo()]);
    const t1 = results[0];
    const t2 = results[1];
    console.timeEnd('Midiendo el tiempo');

    console.log('T1:', t1);
    console.log('T2:', t2);
}

main();