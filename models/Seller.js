const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Seller = new Schema(
  {
    username: { type: String, required: true },
    customerRating: { type: String, required: false }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('sellers', Seller)
