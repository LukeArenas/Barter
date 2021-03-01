const Router = require('express').Router()
const listingController = require('../controllers/ListingController')

Router.get('/listings', listingController.getAllListings)
Router.post('/listings', listingController.createListing)
Router.delete('/listings/:id', listingController.deleteListing)

module.exports = Router
