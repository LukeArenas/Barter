import React, { Component } from 'react'
import NumberFormat from 'react-number-format'

export default class CartItem extends Component {
  handleClick = () => {
    this.props.removeFromCart(this.props.id)
  }
  render() {
    return (
      <div className="cart-item">
        <div className="title">
          <h3 className="cart-title">{this.props.title}</h3>
        </div>
        <div className="price-button-container">
          <p className="cart-price">
            <NumberFormat
              value={this.props.price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              decimalScale={2}
              fixedDecimalScale={true}
            />
          </p>
          <button onClick={this.handleClick} className="remove-from-cart">
            Remove
          </button>
        </div>
      </div>
    )
  }
}
