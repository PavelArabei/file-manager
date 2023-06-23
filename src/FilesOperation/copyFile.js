import {resolve} from 'node:path';
import {unlink} from 'node:fs/promises';
import {pipeline} from 'node:stream/promises';


import {isFileExist} from "../utils.js";
import {createReadStream, createWriteStream} from 'node:fs';


export const copyFile = async (oldFilePath, newFilePath) => {
    try {

        if (!newFilePath) throw new Error('Missing second argument')

        const oldPath = resolve(oldFilePath)
        const newPath = resolve(newFilePath)

        const isExist = await isFileExist(oldPath)
        if (!isExist) throw new Error('File does`t exist')

        const rs = createReadStream(oldPath, 'utf8')
        const ws = createWriteStream(newPath)
        await pipeline(rs, ws)
        console.log('File has been copied')
        return oldPath

    } catch (err) {
        console.log(err.message)
        return false
    }
}

export const removeFile = async (oldFilePath, newFilePath) => {

    try {
        const pathToOldFile = await copyFile(oldFilePath, newFilePath)
        if (!pathToOldFile) return
        await unlink(pathToOldFile)
        console.log('Original file has been deleted')
    } catch (err) {
        console.log(err.message)
    }
}
