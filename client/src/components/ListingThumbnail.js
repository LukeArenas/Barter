import React, { Component } from 'react'

export default class ListingThumbnail extends Component {
  render() {
    const { photo, price, title } = this.props.listing
    return (
      <div>
        <img src={photo} alt={title} />
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
    )
  }
}
