const express = require(`express`)
const app = express()
const port = 4000
const api = require(`./server/router/api`)
const mongoose = require(`mongoose`)

mongoose.connect(`mongodb://localhost/Nasa` , { useNewUrlParser: true } )

app.use(express.json());
app.use( express.urlencoded( { extended : false } ) )
app.use(`/`,api)

app.listen(port , function () {
    console.log(`Server running on port ${port}`)
})