import React, { Component } from 'react'
import CartItem from '../components/CartItem'

export default class Cart extends Component {
  render() {
    console.log(this.props.addedToCart)
    return (
      <div>
        {this.props.addedToCart.map((item) => (
          <CartItem price={item.price} title={item.title} />
        ))}
      </div>
    )
  }
}
