import React, { Component } from 'react'

export default class CartItem extends Component {
  handleClick = () => {
    this.props.removeFromCart(this.props.id)
  }
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.price}</p>
        <button onClick={this.handleClick}>Remove</button>
      </div>
    )
  }
}
