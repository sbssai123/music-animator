import express from 'express'
import { currentSong } from '../models/current-song'

const router = express.Router()
const ACCESS_TOKEN = 'SPOTIFY_ACCESS_TOKEN'

router.get('/', async(req, res) => {
    try {
        const data = await currentSong(req.cookies[ACCESS_TOKEN])
        console.log(data)
        res.status(200).send(data)
    }
    catch (err) {
        res.status(400).send(err)
    }
})

export { router as player }
