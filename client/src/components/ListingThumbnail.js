import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class ListingThumbnail extends Component {
  constructor() {
    super()
    this.state = {
      redirect: false
    }
  }

  handleClick = () => {
    this.setState({ redirect: true })
  }
  render() {
    const { photo, price, title, id } = this.props.listing
    if (this.state.redirect) {
      return <Redirect to="/item-details" />
    }
    return (
      <div value={id} onClick={this.handleClick}>
        <img src={photo} alt={title} />
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
    )
  }
}
