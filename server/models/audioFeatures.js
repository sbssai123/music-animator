import request from 'request-promise-native'

export async function getAudioFeature(accessToken, songId){
    if (!accessToken) {
        // TODO: Put proper error state
        console.log("error")
    }
    else {
        const options = {
            uri: 'https://api.spotify.com/v1/audio-analysis/' + songId,
            headers: {
                'Authorization': accessToken
            },
            json: true
        }
        console.log(options)
        return await request.get(options, (error, response, body) => {
            if (response.statusCode === 200) {
                console.log(response.body)
                return response.body
            }
            else {
                console.log(response)
                throw error
            }
        })
    }

}