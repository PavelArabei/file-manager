import {join, resolve} from 'node:path';
import {chdir} from 'node:process';
import {isDirectory} from "./utils.js";
import {homedir} from 'node:os'


export const changeHomeDir = () => chdir(join(homedir()))

export const navigateToFolder = async (...args) => {

    try {
        if (args.length === 0) throw new Error('Navigation path not specified,please enter directory name')

        let newDirectory

        if (args[0] === 'up') newDirectory = '..'
        else newDirectory = args.join(' ')

        const newPath = resolve(newDirectory);

        const isDirectoryExist = await isDirectory(newPath)

        if (!isDirectoryExist) throw new Error('This directory does`t exist')

        chdir(newPath)

    } catch (err) {
        console.log(err.message)
    }
}

