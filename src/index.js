import {createInterface} from 'node:readline/promises';
import {stdin, stdout, cwd} from 'node:process';

let currentPath = cwd();

const rl = createInterface({
    input: stdin,
    output: stdout,
});

const someFn = (input) => {
    console.log('currentPath ' + input)
}

console.log('currentPath ' + currentPath)

rl.setPrompt('> ');
rl.prompt();

rl.on('line', (input) => {
    someFn(input)
});

