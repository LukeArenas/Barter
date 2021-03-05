const express = require('express')
const db = require('./db/index')
const listingRoutes = require('./routes/ListingRoutes')
const sellerRoutes = require('./routes/SellerRoutes')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 3002

const app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(cors())

app.use('/api', listingRoutes)
app.use('/api', sellerRoutes)

db.on('error', console.error.bind(console, 'MongoDB connection error: '))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
  })
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
