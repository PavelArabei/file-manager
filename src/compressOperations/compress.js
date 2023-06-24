import {resolve, join, extname, basename} from 'node:path';
import {isFileExist} from "../utils.js";
import {createReadStream, createWriteStream} from 'node:fs';
import {createBrotliCompress, createBrotliDecompress} from 'node:zlib';
import {pipeline} from 'node:stream/promises';

export const isPathTrue = async (oldFilePath, newFilePath) => {
    try {
        if (!newFilePath) throw new Error('Missing second argument')

        const oldPath = resolve(oldFilePath)
        const newPath = resolve(newFilePath)

        const isExist = await isFileExist(oldPath)
        if (!isExist) throw new Error('File does`t exist')

        return [oldPath, newPath]
    } catch (err) {
        console.log(err.message)
        return false
    }
}

export const compressDecompress = async (unCompress, oldFilePath, newFilePath) => {

    const pathData = await isPathTrue(oldFilePath, newFilePath)
    if (!pathData) return
    const [file, newFolder] = pathData
    const newFileName = unCompress
        ? `${basename(oldFilePath, extname(oldFilePath))}`
        : `${basename(oldFilePath)}.br`

    const pathToNewFile = join(newFolder, newFileName)

    const zip = unCompress ? createBrotliDecompress() : createBrotliCompress();
    const rs = createReadStream(file);
    const ws = createWriteStream(pathToNewFile);

    await pipeline(rs, zip, ws)

    const resLog = unCompress ? `File has been decompressed` : `File has been compressed`
    console.log(resLog)
}

