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
  }

  getAllListings = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/listings`)
      this.setState({ listings: response.data.allListings })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
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
        <div className="recently-viewed-container">
          {/* {this.props.recentlyViewed.map((listing) => {
            return (
              <ListingThumbnail
                listing={listing}
                viewListing={this.props.viewListing}
                handleSelection={this.props.handleSelection}
                updateRecentlyViewed={this.updateRecentlyViewed}
                {...this.props}
              />
            )
          })} */}
        </div>
        {/* <Footer /> */}
      </div>
    )
  }
}
