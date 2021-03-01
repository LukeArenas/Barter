const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Listing = new Schema(
  {
    photo: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    condition: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('listings', Listing)
