import React, { Component } from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'

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
      vendor: {}
    }
  }
  componentDidMount() {
    this.displayListing().then(this.getSellerInfo)
  }

  displayListing = async () => {
    const response = await axios.get(
      `${BASE_URL}/listings/${this.props.selectedListing}`
    )
    const {
      category,
      condition,
      description,
      photo,
      price,
      title,
      seller_id
    } = response.data.listing

    this.setState({
      category: category,
      condition: condition,
      description: description,
      photo: photo,
      price: price,
      title: title,
      seller_id: seller_id
    })
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

  render() {
    return (
      <div>
        <img src={this.state.photo} alt={this.state.title} />
        <div>
          <h3>{this.state.title}</h3>
          <p>{this.state.price}</p>
          <p>{this.state.condition}</p>
          <p>{this.state.description}</p>
          <p>{this.state.vendor.seller}</p>
          <p>{this.state.vendor.customerRating}</p>
        </div>
        <button onClick={this.handleClick}>Add To Cart</button>
        <button
          onClick={() => {
            this.props.history.push('/cart')
          }}
        >
          Go To Cart
        </button>
      </div>
    )
  }
}
