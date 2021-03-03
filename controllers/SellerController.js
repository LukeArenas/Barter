const Seller = require('../models/Seller')

const getAllSellers = async (req, res) => {
  try {
    const sellers = await Seller.find()
    res.status(200).json({ sellers })
  } catch (error) {
    res.json(`Error with getAllSellers: ${error}`)
  }
}

const getSellerInfo = async (req, res) => {
  try {
    const { id } = req.params
    const seller = await Seller.find({ _id: id })
    return res.status(200).json({ seller })
  } catch (error) {
    res.json(`Error with getSellerInfo: ${error}`)
  }
}

const getSellerByName = async (req, res) => {
  try {
    const { username } = req.params
    const seller = await Seller.find({ seller: username })
    return res.status(200).json({ seller })
  } catch (error) {
    res.json(`Error with getSellerByName: ${error}`)
  }
}

const createSeller = async (req, res) => {
  try {
    const newSeller = await new Seller(req.body)
    await newSeller.save()
    return res.status(200).json({ newSeller })
  } catch (error) {
    res.json(`Error with createSeller: ${error}`)
  }
}

const deleteSeller = async (req, res) => {
  try {
    const { id } = req.params
    await Seller.findByIdAndDelete({ _id: id })
    res.json('Seller deleted')
  } catch (error) {
    res.json(`Error with deleteSeller: ${error}`)
  }
}

module.exports = {
  getSellerInfo,
  createSeller,
  getAllSellers,
  deleteSeller,
  getSellerByName
}
