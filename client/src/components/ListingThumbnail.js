import React, { Component } from 'react'

export default class ListingThumbnail extends Component {
  handleClick = () => {
    this.props.history.push(`/item-details/${this.props.listing._id}`)
    this.props.handleSelection(this.props.listing._id)
    this.props.updateRecentlyViewed()
  }
  render() {
    const { photo, price, title, _id, seller_id } = this.props.listing
    return (
      <div className="thumbnail">
        <div value={_id} onClick={this.handleClick}>
          <img src={photo} alt={title} className="thumbnail-img" />
          <h4>{title}</h4>
          <p>${price}</p>
        </div>
        {seller_id === this.props.currentSellerId &&
        this.props.requestFrom === 'sell' ? (
          <button value={_id} onClick={this.props.deleteListing}>
            Delete
          </button>
        ) : null}
      </div>
    )
  }
}
