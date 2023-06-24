import os from 'node:os'


export const CPUS = async () => {
    const cpus = os.cpus();
    console.log('----------------------');
    console.log('Host Machine CPUs Information:');
    console.log('Overall CPUs:', cpus.length);
    console.log('----------------------');

    cpus.forEach((cpu, index) => {
        const {model, speed} = cpu;
        const clockRate = (speed / 1000).toFixed(2);

        console.log(`CPU ${index + 1}:`);
        console.log(`Model: ${model}`);
        console.log(`Clock Rate: ${clockRate} GHz`);
        console.log('----------------------');
    });
}

