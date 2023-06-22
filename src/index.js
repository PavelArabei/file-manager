import {createInterface} from 'node:readline/promises';
import {stdin, stdout, cwd, exit} from 'node:process';
import {showFilesAndFolders} from "./reader.js";
import {changeHomeDir, navigateToFolder} from "./navigation.js";
import {getUserNameFromArgs} from "./utils.js";
import {fileOperationHandler} from "./FilesOperation/fileOperationHandler.js";


const userName = getUserNameFromArgs()

console.log(`Thank you for using File Manager, ${userName}, goodbye!`)

changeHomeDir()
console.log(`You are currently in ${cwd()}`)

const rl = createInterface({
    input: stdin,
    output: stdout,
});

const handleUserInput = async (input) => {
    const [command, ...args] = input.trim().split(' ')

    if (command === '.exit') {
        rl.close()
    } else if (command === 'cd') {
        await navigateToFolder(...args)
    } else if (command === 'ls') {
        await showFilesAndFolders()
    } else if (command === 'cat' || 'add' || 'rn' || 'cp' || 'mv' || 'rm') {
        await fileOperationHandler(command, ...args)
    } else {
        console.log('The command you entered does not exist.')
    }

    console.log(`You are currently in ${cwd()}`)

}


rl.setPrompt('> ');
rl.prompt();

rl.on('line', async (input) => {
    await handleUserInput(input)
    rl.prompt();
});


rl.on('close', () => {
    console.log(`\nThank you for using File Manager, ${userName}, goodbye!`)
    exit()
})