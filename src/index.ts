import express from "express"
import { echoHandler } from "./handlers"

const app = express();

app.use(express.json())

app.get("/", echoHandler)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("listening on 3000")
})
