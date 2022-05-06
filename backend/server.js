import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

import route from './routes/web.js'
import errorHandling from './middleware/errorHandling.js'
import connectDB from './config/db_config.js'

dotenv.config()
connectDB()
// const envConfig = dotenv.config()
const app = express()
const port = process.env.PORT || 2022

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/user', route)
app.use('/api/todo', route)
app.use(errorHandling)

app.listen(port, () => console.log(`server running on ${port}`))