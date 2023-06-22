import {stat} from 'fs/promises';


async function isDirectory(folderPath) {
    try {
        const stats = await stat(folderPath);
        return stats.isDirectory();
    } catch (err) {
        return false;
    }
}

export {isDirectory}