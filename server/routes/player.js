import express from 'express'
import { currentSong } from '../models/current-song'

const router = express.Router()

router.get('/currentSong', async(req, res) => {
    try {
        const data = await currentSong(req.get('Authorization'))
        res.status(200).send(data)
    }
    catch (err) {
        res.status(400).send(err)
    }
})

export { router as player }
