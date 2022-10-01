import express from 'express'
import cors from 'cors'

export const app = express()

/** Middlewares */
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
