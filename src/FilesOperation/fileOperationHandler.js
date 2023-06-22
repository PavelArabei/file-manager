import {catFile} from "./catFile.js";
import {createNewFile} from "./createNewFile.js";
import {renameFile} from "./rename.js";

export const fileOperationHandler = async (command, ...args) => {
    const [first, second] = args
    if (command === 'cat') {
        await catFile(first)
    } else if (command === 'add') {
        await createNewFile(first)
    } else if (command === 'rn') {
        await renameFile(first, second)
    } else if (command === 'cp') {

    }


}