const Router = require('express').Router()
const controller = require('../controllers/ListingController')

Router.get('/listings', controller.getAllListings)

module.exports = Router
