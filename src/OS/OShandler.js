import {EOL} from "./EOL.js";

export const OsHandler = async (arg) => {
    try {
        if (!arg) throw new Error('Missing first argument')
        if (arg === '--EOL') {
            await EOL(arg)
            //  await catFile(first)
        } else if (arg === '--cpus') {
            // await createNewFile(first)
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
