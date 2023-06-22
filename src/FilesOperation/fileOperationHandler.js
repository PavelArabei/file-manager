import {catFile} from "./catFile.js";
import {createNewFile} from "./createNewFile.js";

export const fileOperationHandler = async (command, ...args) => {
    const [first, second] = args
    if (command === 'cat') {
        await catFile(first)
    } else if (command === 'add') {
        await createNewFile(first)
    }

}