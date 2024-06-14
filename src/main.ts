import express from 'express'

const app = express()

const eventsRouter = express.Router()


eventsRouter
.route("/events")
.get()

eventsRouter
.route("/events/:id")
.get()

eventsRouter
.route("/events")
.post()

eventsRouter
.route("/events/:id")
.patch()


eventsRouter
.route("/events/:id")
.delete()

app.use(eventsRouter)

app.use(express.json())

