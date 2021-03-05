import React, { Component } from 'react'
import NumberFormat from 'react-number-format'

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
        <div
          className="thumbnail-content"
          value={_id}
          onClick={this.handleClick}
        >
          <img src={photo} alt={title} className="thumbnail-img" />
          <h4 className="thumbnail-title">{title}</h4>
          <p className="price">
            <NumberFormat
              value={price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              decimalScale={2}
              fixedDecimalScale={true}
            />
          </p>
        </div>

        {seller_id === this.props.currentSellerId &&
        this.props.requestFrom === 'sell' ? (
          <div className="dropdown">
            <div class="dropbtn">
              <button
                value={_id}
                onClick={this.props.deleteListing}
                className="delete-button"
              >
                X
              </button>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}
