import request from 'request-promise-native'

export async function currentSong(accessToken) {
    if (!accessToken) {
        // TODO: Put proper error state
        console.log("error")
    }
    else {
        const options = {
            uri: 'https://api.spotify.com/v1/me/player',
            headers: {
                'Authorization': accessToken
            },
            json: true
        }
        return await request.get(options, (error, response, body) => {
            if (response.statusCode === 200) {
                return response.body
            }
            else {
                throw error
            }
        })
    }
}
