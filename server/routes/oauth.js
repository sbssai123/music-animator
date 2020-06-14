import express from 'express'
import querystring from 'querystring'
import request from 'request-promise-native'

const router = express.Router()
const AUTH_STATE = 'AUTH_STATE'

// User login into Spotify and authorizes access for this app
router.get('/login', (req, res) => {
    const state = Math.random().toString(36).substring(3, 15)
    res.cookie(AUTH_STATE, state)

    const queryParams = querystring.stringify({
        client_id: process.env.CLIENT_ID,
        response_type: 'code',
        scope: 'user-read-playback-state',
        redirect_uri: process.env.REDIRECT_URI,
        state: state
    })
    res.redirect('https://accounts.spotify.com/authorize?' + queryParams)
})

router.get('/callback', async (req, res) => {
    const code = req.query.code || null
    const state = req.query.state || null
    const cookie_state = req.cookies ? req.cookies[AUTH_STATE] : null

    if (state === null || state !== cookie_state) {
        console.log("ERROR")
        return
    }
    else {
        res.clearCookie(AUTH_STATE)
        const options = {
            uri: 'https://accounts.spotify.com/api/token',
            headers : {
                'Authorization': 'Basic ' + (Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'))
            },
            form: {
                code: code,
                grant_type: 'authorization_code',
                redirect_uri: process.env.REDIRECT_URI
            },
            json: true
        }
        await request.post(options, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                // Store tokens for requests in cookie
                res.cookie('SPOTIFY_ACCESS_TOKEN', response.body.access_token)
                res.cookie('SPOTIFY_REFRESH_TOKEN', response.body.refresh_token)
                res.redirect(process.env.APP_BASE_URI + '/player')
            }
            else {
                // TODO: Make a real error state
                console.log("error")
            }
        })
    }
})

export { router as oauth }
