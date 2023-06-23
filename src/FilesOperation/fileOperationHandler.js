import {catFile} from "./catFile.js";
import {createNewFile} from "./createNewFile.js";
import {renameFile} from "./rename.js";
import {copyFile, removeFile} from "./copyFile.js";
import {deleteFile} from "./deleteFile.js";

export const fileOperationHandler = async (command, ...args) => {
    const [first, second] = args
    try {
        if (!first) throw new Error('Missing first argument')

        if (command === 'cat') await catFile(first)
        else if (command === 'add') await createNewFile(first)
        else if (command === 'rn') await renameFile(first, second)
        else if (command === 'cp') await copyFile(first, second)
        else if (command === 'mv') await removeFile(first, second)
        else if (command === 'rm') await deleteFile(first)

    } catch (err) {
        console.log(err.message)
    }


}