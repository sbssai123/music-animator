import dotenv from 'dotenv';
import express from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser'
import { oauth } from './routes/oauth'
import { player } from './routes/player'

dotenv.config()
const app = express()
app.use(cors())
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/oauth', oauth)
app.use('/player', player)

app.listen(5000, () => {
    console.log("Serving on port 5000!")
})
