const Router = require('express').Router()
const sellerController = require('../controllers/SellerController')

Router.get('/sellers', sellerController.getAllSellers)
Router.get('/sellers/:username', sellerController.getSellerByName)
Router.get('/sellers/:id', sellerController.getSellerInfo)
Router.post('/sellers', sellerController.createSeller)
Router.delete('/sellers/:id', sellerController.deleteSeller)

module.exports = Router
