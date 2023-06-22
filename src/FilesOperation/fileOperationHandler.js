import {catFile} from "./catFile.js";

export const fileOperationHandler = async (command, ...args) => {
    if (command === 'cat') {
        await catFile(args[0])
    } else if (command === 'add') {


    }

}