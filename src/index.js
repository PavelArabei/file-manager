import {createInterface} from 'node:readline/promises';
import {stdin, stdout, cwd, exit} from 'node:process';
import {showFilesAndFolders} from "./reader.js";
import {changeHomeDir, navigateToFolder} from "./navigation.js";

import {getUserNameFromArgs} from "./utils.js";
import {fileOperationHandler} from "./FilesOperation/fileOperationHandler.js";
import {OsHandler} from "./OS/OShandler.js";
import {hash} from "./hash/hash.js";


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
    } else if (command === 'cat' || command === 'add' || command === 'rn' || command === 'cp' || command === 'mv' || command === 'rm') {
        await fileOperationHandler(command, ...args)
    } else if (command === 'os') {
        await OsHandler(args[0])
    } else if (command === 'hash') {
        await hash(args[0])
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