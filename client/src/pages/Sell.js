import React, { Component } from 'react'
import ListingThumbnail from '../components/ListingThumbnail'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default class Sell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.username,
      listings: [],
      title: '',
      condition: '',
      description: '',
      price: 0,
      photo: '',
      category: ''
    }
  }

  componentDidMount() {
    this.getListingByUser()
  }

  getListingByUser = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/listings/user/603d57f33b8a020518b63c8a`
      )
      this.setState({ listings: response.data.userListings })
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

  setPrice = (event) => {
    this.setState({ price: parseInt(event.target.value) })
  }

  setPhoto = (event) => {
    this.setState({ photo: event.target.value })
  }

  setCategory = (event) => {
    this.setState({ category: event.target.value })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="title" onChange={this.setTitle} />
          <select onChange={this.setCondition}>
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
          <input
            type="text"
            placeholder="description"
            onChange={this.setDescription}
          />
          <input type="text" placeholder="price" onChange={this.setPrice} />
          <input type="text" placeholder="photo url" onChange={this.setPhoto} />
          <select onChange={this.setCategory}>
            <option value="toys">Toys</option>
            <option value="appliances">Appliances</option>
            <option value="homegoods">Homegoods</option>
            <option value="books">Books</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="outdoor">Outdoor</option>
            <option value="miscellaneous">Miscellaneous</option>
          </select>
          <input type="submit" value="List Item" />
        </form>
        <div className="product-container">
          {this.state.listings.map((listing) => {
            return (
              <ListingThumbnail
                listing={listing}
                viewListing={this.props.viewListing}
                handleSelection={this.props.handleSelection}
                updateRecentlyViewed={this.updateRecentlyViewed}
                {...this.props}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
