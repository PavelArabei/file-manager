import {createReadStream} from 'node:fs';
import {cwd} from 'node:process';
import {join} from 'node:path';
import {isFileExist} from "../utils.js";


export const catFile = async (fileName) => {

    try {
        const path = join(cwd(), fileName)

        const isFile = await isFileExist(path)
        if (!isFile) throw new Error('This file does`t exist')

        await new Promise(res => {
            const rs = createReadStream(path, 'utf8')
            rs.on('data', (chunk) => console.log('\n' + chunk));
            rs.on('end', () => res());
        })

    } catch (err) {
        console.log(err.message)
    }

}
