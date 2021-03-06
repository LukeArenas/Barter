import React, { Component } from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import CurrencyInput from 'react-currency-input-field'

export default class ItemDetails extends Component {
  constructor() {
    super()
    this.state = {
      category: '',
      condition: '',
      description: '',
      photo: '',
      price: 0,
      title: '',
      seller_id: '',
      vendor: {},
      redirect: false,
      beginUpdate: false,
      matchCurrentUser: ''
    }
  }
  componentDidMount() {
    this.displayListing().then(this.getSellerInfo)
  }

  displayListing = async () => {
    const response = await axios.get(
      `${BASE_URL}/listings/${this.props.selectedListing}`
    )
    response.data.listing
      ? this.setState({
          category: response.data.listing.category,
          condition: response.data.listing.condition,
          description: response.data.listing.description,
          photo: response.data.listing.photo,
          price: response.data.listing.price,
          title: response.data.listing.title,
          seller_id: response.data.listing.seller_id
        })
      : this.setState({ redirect: true })
  }

  handleClick = () => {
    this.props.addToCart()
  }

  getSellerInfo = async () => {
    const response = await axios.get(
      `${BASE_URL}/sellers/id/${this.state.seller_id}`
    )
    this.setState({ vendor: response.data.seller[0] })
  }

  updatePrice = (value) => {
    this.setState({ price: value })
  }

  updateDescription = (event) => {
    this.setState({ description: event.target.value })
  }

  updateListing = async () => {
    await axios.put(
      `${BASE_URL}/listings/update/${this.props.selectedListing}`,
      { price: this.state.price, description: this.state.description }
    )
    this.setState({ beginUpdate: false })
  }

  beginUpdate = () => {
    this.setState({ beginUpdate: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }
    return (
      <div className="item-details-page">
        <img
          src={this.state.photo}
          alt={this.state.title}
          className="details-img"
        />
        {this.state.beginUpdate ? (
          <div className="detail-content">
            <h3>{this.state.title}</h3>
            <CurrencyInput
              placeholder="price"
              onValueChange={this.updatePrice}
              decimalScale={2}
              prefix="$"
              className="update-input"
            />
            <p>Condition: {this.state.condition}</p>
            Details:{' '}
            <input
              type="text"
              value={this.state.description}
              onChange={this.updateDescription}
              className="update-input"
            />
            <p>Seller: {this.state.vendor.seller}</p>
            <p>Seller Rating: {this.state.vendor.customerRating}</p>
          </div>
        ) : (
          <div className="detail-content">
            <h3>{this.state.title}</h3>
            <p>${this.state.price}</p>
            <p>Condition: {this.state.condition}</p>
            <p>Details: {this.state.description}</p>
            <p>Seller: {this.state.vendor.seller}</p>
            <p>Seller Rating: {this.state.vendor.customerRating}</p>
          </div>
        )}

        <div className="button-container">
          {this.state.vendor.seller === this.props.username &&
          !this.state.beginUpdate ? (
            <button onClick={this.beginUpdate} className="cart-button">
              Update
            </button>
          ) : this.state.vendor.seller !== this.props.username ? (
            <div>
              <button className="cart-button" onClick={this.handleClick}>
                Add To Cart
              </button>
              <button
                className="cart-button"
                onClick={() => {
                  this.props.history.push('/cart')
                }}
              >
                Go To Cart
              </button>
            </div>
          ) : null}
          {this.state.beginUpdate ? (
            <button onClick={this.updateListing} className="cart-button">
              Confirm
            </button>
          ) : null}
        </div>
      </div>
    )
  }
}
