import axios from 'axios'
import React, { Component } from 'react'
import { BASE_URL } from '../globals'
import ListingThumbnail from '../components/ListingThumbnail'

export default class Buy extends Component {
  constructor() {
    super()
    this.state = {
      listings: []
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
    this.props.recentlyViewed.length > 5
      ? this.props.recentlyViewed.shift()
      : console.log('ok')
  }

  render() {
    return (
      <div className="buy-page">
        <h3>Find what you need:</h3>
        <div className="product-container" id="buy-list">
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
