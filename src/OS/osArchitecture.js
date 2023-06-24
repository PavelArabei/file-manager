import {arch} from 'node:os'

export const osArchitecture = async () => {
    const arc = arch()
    console.log(`CPU Architecture: ${arc}`)
}