import {userInfo} from 'node:os'

export const userName = async () => {
    const name = userInfo().username
    console.log(`Current System User: ${name}`)
}
