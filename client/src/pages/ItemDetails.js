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
      title: ''
    }
  }
  componentDidMount() {
    this.displayListing()
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
      title
    } = response.data.listing

    this.setState({
      category: category,
      condition: condition,
      description: description,
      photo: photo,
      price: price,
      title: title
    })
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
        </div>
        <button>Add To Cart</button>
      </div>
    )
  }
}
