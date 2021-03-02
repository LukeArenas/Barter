import React, { Component } from 'react'
import CartItem from '../components/CartItem'

export default class Cart extends Component {
  render() {
    return (
      <div>
        {this.props.addedToCart.map(() => (
          <CartItem />
        ))}
      </div>
    )
  }
}
