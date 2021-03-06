import axios from 'axios'
import React, { Component } from 'react'
import { BASE_URL } from '../globals'
import ListingThumbnail from '../components/ListingThumbnail'

export default class Buy extends Component {
  constructor() {
    super()
    this.state = {
      listings: [],
      catFilter: 'all',
      priceFilter: 1000000
    }
  }
  componentDidMount() {
    this.getAllListings()
    this.formatRecentlyViewed()
  }

  getAllListings = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/listings`)
      this.setState({ listings: response.data.allListings })
    } catch (error) {
      console.log(error)
    }
  }

  formatRecentlyViewed = () => {
    return this.props.recentlyViewed.length > 5
      ? this.props.recentlyViewed.shift()
      : []
  }

  changeCatFilter = (event) => {
    this.setState({ catFilter: event.target.value })
  }

  changePriceFilter = (event) => {
    this.setState({ priceFilter: event.target.value })
  }

  render() {
    return (
      <div className="buy-page">
        <h3 className="buy-title">Find What You Need:</h3>
        <h4 className="filter-spec">Category</h4>
        <form className="filter">
          <select onChange={this.changeCatFilter}>
            <option value="all">All</option>
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
        </form>
        <h4 className="filter-spec">Price</h4>
        <form className="filter">
          <select onChange={this.changePriceFilter}>
            <option value={1000000}>All</option>
            <option value={20}>Under $20</option>
            <option value={50}>Under $50</option>
            <option value={100}>Under $100</option>
            <option value={1000}>Under $1,000</option>
            <option value={10000}>Under $10,000</option>
          </select>
        </form>
        <div className="product-container" id="buy-list">
          {this.state.listings.map((listing) => {
            return listing.category === this.state.catFilter &&
              listing.price < this.state.priceFilter ? (
              <ListingThumbnail
                listing={listing}
                viewListing={this.props.viewListing}
                handleSelection={this.props.handleSelection}
                updateRecentlyViewed={this.updateRecentlyViewed}
                {...this.props}
              />
            ) : listing.price < this.state.priceFilter &&
              this.state.catFilter === 'all' ? (
              <ListingThumbnail
                listing={listing}
                viewListing={this.props.viewListing}
                handleSelection={this.props.handleSelection}
                updateRecentlyViewed={this.updateRecentlyViewed}
                {...this.props}
              />
            ) : null
          })}
        </div>
        <h3 className="recently-viewed-title">Your Recently Viewed Items:</h3>
        <div className="recently-viewed-container">
          {this.props.recentlyViewed.map((listing) => {
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
