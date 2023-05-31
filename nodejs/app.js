const express = require("express")
const app = express()

const cors = require("cors")

const corsOptions = {
    origin: "*"
}
require('dotenv').config()

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = require("./models")

db.sequelize.sync({ force: true }).then(() => {
  require('./models/testData').testData()
})

app.get("/", (req, res) => {
    res.json({ message: "Welcome." })
})

require('./routes/testRoute')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})