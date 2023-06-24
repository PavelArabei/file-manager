import {resolve} from 'node:path';
import {unlink} from 'node:fs/promises';
import {isFileExist} from "../utils.js";


export const deleteFile = async (fileName) => {
    try {
        const path = resolve(fileName)
        const isExist = await isFileExist(path)
        if (!isExist) throw new Error('File does`t exist or it`s a folder')

        await unlink(path)
        console.log('Original file has been deleted')


    } catch (err) {
        console.log(err.message)
    }
}