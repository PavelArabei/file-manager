import {readdir} from 'fs/promises';
import {isDirectory} from "./helpers.js";
import {join} from 'node:path'


export const showFilesAndFolders = async (folderPath) => {
    const folders = []
    const filesArr = []
    try {
        const files = await readdir(folderPath);

        for await (const file of files) {
            const filePath = join(folderPath, file)
            const isFolder = await isDirectory(filePath)

            if (!isFolder) filesArr.push({Name: file, Type: 'file'})
            else folders.push({Name: file, Type: 'directory'})
        }
        const result = [...folders, ...filesArr];
        console.table(result)

    } catch (err) {
        console.error(err);
    }

}
