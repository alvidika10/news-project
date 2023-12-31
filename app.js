const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const router = require('./routes')
const errorhandler = require('./middlewares/errorHandler')


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use(router)
app.use(errorhandler)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})