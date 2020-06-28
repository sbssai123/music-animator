import express from 'express'
import { currentSong } from '../models/trackInfo'
import { getAudioFeature } from '../models/audioFeatures'

const router = express.Router()

router.get('/currentSong', async(req, res) => {
    let playerInfo;
    try {
        playerInfo = await currentSong(req.get('Authorization'))
    }
    catch (err) {
        res.status(400).send(err)
    } 
    if(!playerInfo.is_playing) {
        res.status(200).send({isPlaying: false})
    }
    else {
        try {
            const audioFeatures = await getAudioFeature(req.get('Authorization'), playerInfo.item.id)
            res.status(200).send(audioFeatures)
        }
        catch (err) {
            res.status(400).send(err)
        }
    }
})

export { router as player }
