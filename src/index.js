import {createInterface} from 'node:readline/promises';
import {stdin, stdout, cwd, exit} from 'node:process';
import {showFilesAndFolders} from "./reader.js";
import {changeHomeDir, navigateToFolder} from "./navigation.js";

import {getUserNameFromArgs} from "./utils.js";
import {fileOperationHandler} from "./FilesOperation/fileOperationHandler.js";
import {OsHandler} from "./OS/OShandler.js";
import {hash} from "./hash/hash.js";
import {compressDecompress} from "./compressOperations/compress.js";


const userName = getUserNameFromArgs()

console.log(`Thank you for using File Manager, ${userName}, goodbye!`)

changeHomeDir()
console.log(`You are currently in ${cwd()}`)

const rl = createInterface({
    input: stdin,
    output: stdout,
});

const fsOperations = ['cat', 'add', 'rn', 'cp', 'mv', 'rm']


const handleUserInput = async (input) => {
    const [command, ...args] = input.trim().split(' ')

    if (command === '.exit') rl.close()
    else if (command === 'cd') await navigateToFolder(...args)
    else if (command === 'ls') await showFilesAndFolders()
    else if (fsOperations.includes(command)) await fileOperationHandler(command, ...args)
    else if (command === 'os') await OsHandler(args[0])
    else if (command === 'hash') await hash(args[0])
    else if (command === 'compress') await compressDecompress(false, ...args)
    else if (command === 'decompress') await compressDecompress(true, ...args)
    else console.log('The command you entered does not exist.')

    console.log(`You are currently in ${cwd()}`)

}

rl.setPrompt('> ');
rl.prompt();

rl.on('line', async (input) => {
    await handleUserInput(input)
    rl.prompt();
});

rl.on('SIGINT', () => rl.close())

rl.on('close', () => {
    console.log(`\nThank you for using File Manager, ${userName}, goodbye!`)
    exit()
})