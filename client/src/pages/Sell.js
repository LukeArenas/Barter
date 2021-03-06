import React, { Component } from 'react'
import ListingThumbnail from '../components/ListingThumbnail'
import axios from 'axios'
import { BASE_URL } from '../globals'
import CurrencyInput from 'react-currency-input-field'
import { Redirect } from 'react-router-dom'

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
      category: 'miscellaneous',
      redirect: false
    }
  }

  componentDidMount() {
    this.getListingByUser()
    this.formatRecentlyViewed()
  }

  getListingByUser = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/listings/user/${this.props.currentSeller._id}`
      )
      response.data.userListings
        ? this.setState({ listings: response.data.userListings })
        : this.setState({ redirect: true })
    } catch (error) {
      console.log(error)
    }
  }

  deleteListing = async (event) => {
    await axios.delete(`${BASE_URL}/listings/${event.target.value}`)
    this.getListingByUser()
  }

  formatRecentlyViewed = () => {
    this.props.recentlyViewed.length > 5
      ? this.props.recentlyViewed.shift()
      : console.log('ok')
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`${BASE_URL}/listings`, {
        title: this.state.title,
        condition: this.state.condition,
        description: this.state.description,
        price: this.state.price,
        photo: this.state.photo,
        category: this.state.category,
        seller_id: this.props.currentSeller._id
      })
      this.getListingByUser()
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
    if (this.state.redirect) {
      return <Redirect to="/" />
    }
    return (
      <div className="sell-page">
        <h3 className="greeting">List What You Don't Need:</h3>
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
            decimalScale={2}
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
            <option value="furniture">Furniture</option>
            <option value="artsandcrafts">Arts and Crafts</option>
            <option value="vehicles">Vehicles</option>
          </select>
          <input type="submit" value="List Item" className="listing-submit" />
        </form>
        <h3>Your listings:</h3>
        <div className="product-container" id="sell-list">
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
