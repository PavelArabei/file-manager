import {readdir} from 'fs/promises';
import {isDirectory} from "./utils.js";
import {cwd} from 'node:process';
import {join} from 'node:path'


export const showFilesAndFolders = async () => {
    const allFolders = []
    const allFiles = []
    try {
        const files = await readdir(cwd());

        for await (const file of files) {
            const filePath = join(cwd(), file)
            const isFolder = await isDirectory(filePath)

            if (!isFolder) allFiles.push({Name: file, Type: 'file'})
            else allFolders.push({Name: file, Type: 'directory'})
        }

        const result = [...allFolders, ...allFiles];
        console.table(result)

    } catch (err) {
        console.log(err.message);
    }

}
