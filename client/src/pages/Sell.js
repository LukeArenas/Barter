import React, { Component } from 'react'
import ListingThumbnail from '../components/ListingThumbnail'
import axios from 'axios'
import { BASE_URL } from '../globals'
import CurrencyInput from 'react-currency-input-field'

export default class Sell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFrom: 'sell',
      username: this.props.username,
      listings: [],
      title: '',
      condition: 'new',
      description: '',
      price: 0,
      photo: '',
      category: 'miscellaneous'
    }
  }

  componentDidMount() {
    this.getListingByUser()
  }

  getListingByUser = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/listings/user/${this.props.currentSeller._id}`
      )
      console.log(response)
      this.setState({ listings: response.data.userListings })
    } catch (error) {
      console.log(error)
    }
  }

  deleteListing = async (event) => {
    await axios.delete(`${BASE_URL}/listings/${event.target.value}`)
    this.getListingByUser()
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${BASE_URL}/listings`, {
        title: this.state.title,
        condition: this.state.condition,
        description: this.state.description,
        price: this.state.price,
        photo: this.state.photo,
        category: this.state.category,
        seller_id: this.props.currentSeller._id
      })
      this.getListingByUser()
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  setTitle = (event) => {
    this.setState({ title: event.target.value })
  }

  setCondition = (event) => {
    this.setState({ condition: event.target.value })
  }

  setDescription = (event) => {
    this.setState({ description: event.target.value })
  }

  setPrice = (value) => {
    this.setState({ price: value })
  }

  setPhoto = (event) => {
    this.setState({ photo: event.target.value })
  }

  setCategory = (event) => {
    this.setState({ category: event.target.value })
  }

  render() {
    return (
      <div className="sell-page">
        <h3>List what you don't need:</h3>
        <form onSubmit={this.handleSubmit} className="new-listing-form">
          <input type="text" placeholder="title" onChange={this.setTitle} />
          <select onChange={this.setCondition}>
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>
          <input
            type="text"
            placeholder="description"
            onChange={this.setDescription}
          />
          <CurrencyInput
            placeholder="price"
            onValueChange={this.setPrice}
            decimalScale={0}
            prefix="$"
          />
          {/* $<input type="text" placeholder="price" onChange={this.setPrice} /> */}
          <input type="text" placeholder="photo url" onChange={this.setPhoto} />
          <select onChange={this.setCategory}>
            <option value="miscellaneous">Miscellaneous</option>
            <option value="toys">Toys</option>
            <option value="appliances">Appliances</option>
            <option value="homegoods">Home and Kitchen</option>
            <option value="books">Books</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="outdoor">Outdoor</option>
            <option value="outdoor">Furniture</option>
            <option value="outdoor">Arts and Crafts</option>
            <option value="outdoor">Vehicles</option>
          </select>
          <input type="submit" value="List Item" />
        </form>
        <h3>Your listings:</h3>
        <div className="product-container">
          {this.state.listings.map((listing) => {
            return (
              <ListingThumbnail
                listing={listing}
                currentSellerId={this.props.currentSeller._id}
                viewListing={this.props.viewListing}
                handleSelection={this.props.handleSelection}
                updateRecentlyViewed={this.updateRecentlyViewed}
                deleteListing={this.deleteListing}
                requestFrom={this.state.requestFrom}
                {...this.props}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
