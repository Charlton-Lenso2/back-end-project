const express = require("express")
const app = express()
const pool = require("./db")
const routes = require("./routes/routes")
const cors = require("cors")
const PORT = 5000

app.use(express.json())
app.use(cors())
app.use("/auth", routes)

app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`)
})