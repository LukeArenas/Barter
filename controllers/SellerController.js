const Seller = require('../models/Seller')

const getSellerInfo = async (req, res) => {
  try {
    const { id } = req.params
    const seller = await Seller.find({ _id: id })
  } catch (error) {
    res.json(`Error with getSellerInfo: ${error}`)
  }
}

module.exports = { getSellerInfo }
