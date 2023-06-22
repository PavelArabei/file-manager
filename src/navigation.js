import {join} from 'node:path';
import {chdir, cwd} from 'node:process';
import {isDirectory} from "./utils.js";
import {homedir} from 'node:os'


export const changeHomeDir = () => chdir(join(homedir()))

export const navigateToFolder = async (...args) => {

    try {
        if (args.length === 0) throw new Error('Navigation path not specified,please enter directory name')

        const newDirectory = args[0] === 'up' ? '..' : args[0]

        const newPath = join(cwd(), newDirectory);
        const isDirectoryExist = await isDirectory(newPath)

        if (!isDirectoryExist) throw new Error('This directory does`t exist')

        chdir(newPath)

    } catch (err) {
        console.log(err.message)
    }
}

