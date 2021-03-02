import React, { Component } from 'react'

export default class ListingThumbnail extends Component {
  handleClick = () => {
    this.props.history.push(`/item-details/${this.props.listing._id}`)
    this.props.handleSelection(this.props.listing._id)
  }
  render() {
    const { photo, price, title, _id } = this.props.listing
    return (
      <div value={_id} onClick={this.handleClick}>
        <img src={photo} alt={title} />
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
    )
  }
}
