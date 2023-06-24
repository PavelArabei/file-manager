import {homedir} from 'node:os'

export const homeDir = async () => {
    console.log(`Home directory : ${homedir()}`)
}
