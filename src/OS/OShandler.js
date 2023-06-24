import {EOL} from "./EOL.js";
import {CPUS} from "./CPUS.js";
import {homeDir} from "./homeDir.js";
import {userName} from "./userName.js";
import {osArchitecture} from "./osArchitecture.js";

export const OsHandler = async (arg) => {
    try {
        if (!arg) throw new Error('Missing first argument')
        if (arg === '--EOL') {
            await EOL(arg)
        } else if (arg === '--cpus') {
            await CPUS()
        } else if (arg === '--homedir') {
            await homeDir()
        } else if (arg === '--username') {
            await userName()
        } else if (arg === '--architecture') {
            await osArchitecture()
        } else {
            throw new Error('Such argument does`t exist')
        }


    } catch (err) {
        console.log(err.message)
    }


}
