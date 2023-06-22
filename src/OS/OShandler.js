import {EOL} from "./EOL.js";
import {CPUS} from "./CPUS.js";

export const OsHandler = async (arg) => {
    try {
        if (!arg) throw new Error('Missing first argument')
        if (arg === '--EOL') {
            await EOL(arg)
        } else if (arg === '--cpus') {
            await CPUS()
        } else if (arg === '--homedir') {
            //  await renameFile(first, second)
        } else if (arg === '--username') {
            // await copyFile(first, second)
        } else if (arg === '--architecture') {
            //await removeFile(first, second)
        }


    } catch (err) {
        console.log(err.message)
    }


}
