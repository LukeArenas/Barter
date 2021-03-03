import React, { Component } from 'react'

export default class CartItem extends Component {
  handleClick = () => {
    this.props.removeFromCart(this.props.id)
  }
  render() {
    return (
      <div className="cart-item">
        <h3 className="cart-title">{this.props.title}</h3>
        <p className="cart-price">${this.props.price}</p>
        <button onClick={this.handleClick} className="remove-from-cart">
          Remove
        </button>
      </div>
    )
  }
}
