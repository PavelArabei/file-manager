import {cwd} from 'node:process';
import {join} from 'node:path';
import {writeFile} from 'node:fs/promises';
import {isFileExist} from "../utils.js";


export const createNewFile = async (fileName) => {
    try {
        const path = join(cwd(), fileName)

        const isExist = await isFileExist(path)
        if (isExist) throw new Error('File already exist')

        await writeFile(path, '', {flag: 'w'})
        console.log(`File ${fileName} created successfully.`);

    } catch (err) {
        console.log(err.message)
    }

}