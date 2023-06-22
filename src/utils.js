import {stat} from 'fs/promises';
import {argv} from 'node:process';

export const isDirectory = async (folderPath) => {
    try {
        const stats = await stat(folderPath);
        return stats.isDirectory();
    } catch (err) {
        return false;
    }
}


export const getUserNameFromArgs = () => {
    
    const userName = argv.slice(2).reduce((acc, arg) => {
        const prefix = '--username='
        if (arg.startsWith(prefix)) acc = arg.substring(prefix.length)
        return acc
    }, '')

    return userName || 'Anonymous'
}