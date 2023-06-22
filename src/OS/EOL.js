import os from 'node:os'


export const EOL = async () => {
    const EOL = JSON.stringify(os.EOL)
    console.log(`End-Of-Line on this system : ${EOL}`)
}
