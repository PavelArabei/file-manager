import {stat} from 'fs/promises';
import {argv} from 'node:process';

export const isFileOrFolderExist = async (path) => {
    try {
        const stats = await stat(path);
        return stats
    } catch (err) {
        return false;
    }
}

export const isDirectory = async (folderPath) => {
    const stats = await isFileOrFolderExist(folderPath)
    if (stats) return stats.isDirectory();
}
export const isFileExist = async (folderPath) => {
    const stats = await isFileOrFolderExist(folderPath)
    if (stats) return !stats.isDirectory();
}


export const getUserNameFromArgs = () => {

    const userName = argv.slice(2).reduce((acc, arg) => {
        const prefix = '--username='
        if (arg.startsWith(prefix)) acc = arg.substring(prefix.length)
        return acc
    }, '')

    return userName || 'Anonymous'
}