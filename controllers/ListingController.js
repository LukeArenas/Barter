const Listing = require('../models/Listing')

const createListing = async (req, res) => {
  try {
    const newListing = await new Listing(req.body)
    await newListing.save()
    return res.status(200).json({ newListing })
  } catch (error) {
    res.json(`Error with createListing: ${error}`)
  }
}

const getListingByUser = async (req, res) => {
  try {
    const { user_id } = req.params
    const userListings = await Listing.find({ seller_id: user_id })
    res.status(200).json({ userListings })
  } catch (error) {
    res.json(`Error with getListingByUser: ${error}`)
  }
}

const getAllListings = async (req, res) => {
  try {
    const allListings = await Listing.find()
    return res.status(200).json({ allListings })
  } catch (error) {
    res.json(`Error with getAllListings: ${error}`)
  }
}

const deleteListing = async (req, res) => {
  try {
    const { id } = req.params
    await Listing.findByIdAndDelete({ _id: id })
    res.json(`Listing deleted`)
  } catch (error) {
    res.json(`Error with deleteListing: ${error}`)
  }
}

module.exports = {
  createListing,
  getListingByUser,
  getAllListings,
  deleteListing
}
