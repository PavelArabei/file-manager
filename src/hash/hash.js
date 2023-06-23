import {resolve} from 'node:path';
import {readFile} from 'fs/promises';
import {isFileExist} from "../utils.js";

const {createHash} = await import('node:crypto');


export const hash = async (fileName) => {
    try {
        const path = resolve(fileName)
        const isExist = await isFileExist(path)
        if (!isExist) throw new Error('File does`t exist')


        const data = await readFile(path)
        const res = await createHash('sha256')
            .update(data)
            .digest('hex');
        console.log(res)


    } catch (err) {
        console.log(err.message)
    }

}