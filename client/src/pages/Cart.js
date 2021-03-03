import React, { Component } from 'react'
import CartItem from '../components/CartItem'

export default class Cart extends Component {
  render() {
    console.log(this.props.addedToCart)
    return (
      <div className="cart">
        <div className="product-container">
          {this.props.addedToCart.map((item) => (
            <CartItem
              price={item.price}
              title={item.title}
              id={item._id}
              removeFromCart={this.props.removeFromCart}
            />
          ))}
        </div>
      </div>
    )
  }
}
