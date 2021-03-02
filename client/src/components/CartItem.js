import React, { Component } from 'react'

export default class CartItem extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.price}</p>
      </div>
    )
  }
}
