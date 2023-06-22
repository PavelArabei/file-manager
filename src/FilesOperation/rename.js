import {cwd} from 'node:process';
import {join} from 'node:path';
import {rename} from 'node:fs/promises';

import {isFileExist} from "../utils.js";


export const renameFile = async (oldFileName, newFileName) => {
    try {

        if (!newFileName) throw new Error('Missing second argument')

        const oldPath = join(cwd(), oldFileName)
        const newPath = join(cwd(), newFileName)

        const isExist = await isFileExist(oldPath)
        if (!isExist) throw new Error('File does`t exist')

        await rename(oldPath, newPath)
        console.log('File was renamed')


    } catch (err) {
        console.log(err.message)
    }


}
