import {createInterface} from 'node:readline/promises';
import {stdin, stdout, cwd} from 'node:process';
import {showFilesAndFolders} from "./reader.js";
import {changeHomeDir, navigateToFolder} from "./navigation.js";

changeHomeDir()

const rl = createInterface({
    input: stdin,
    output: stdout,
});

const handleUserInput = async (input) => {
    const [command, ...args] = input.trim().split(' ')

    if (command === 'cd') {
        await navigateToFolder(...args)
    } else if (command === 'ls') {
        await showFilesAndFolders(currentPath)
    }

    console.log(`You are currently in ${cwd()}`)

}
console.log(`You are currently in ${cwd()}`)


rl.setPrompt('> ');
rl.prompt();

rl.on('line', async (input) => {
    await handleUserInput(input)
    rl.prompt();
});


