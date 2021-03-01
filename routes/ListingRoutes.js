const Router = require('express').Router()
const controller = require('../controllers/ListingController')

Router.get('/listings', controller.getAllListings)
Router.post('/listings', controller.createListing)
Router.delete('/listings/:id', controller.deleteListing)

module.exports = Router
