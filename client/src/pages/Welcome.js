import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import sellingImage from '../images/selling-image.png'
import shoppingImage from '../images/online-shopping.png'

export default class Welcome extends Component {
  constructor() {
    super()
    this.state = {
      showBuyPage: false
    }
  }
  handleWelcomeSubmit = () => {
    this.setState({ showBuyPage: true })
    this.props.createSeller()
  }

  render() {
    if (this.state.showBuyPage) {
      return <Redirect to="/buy" />
    }
    return (
      <div className="welcome-page">
        <div className="welcome-content">
          <h3>Hi There!</h3>
          <p>Please enter your username:</p>
          <form onSubmit={this.handleWelcomeSubmit}>
            <input
              type="text"
              placeholder="Enter username"
              onChange={this.props.handleUsername}
              className="username-field"
            />
            <input
              type="submit"
              value="Let's Trade"
              className="welcome-submit"
            />
          </form>
          <div className="marketing">
            <img src={shoppingImage} alt="shop" className="shopping-image" />
            <div className="first">
              <h3>Find what you need</h3>
            </div>
            <div className="second">
              <h3>List what you don't</h3>
            </div>
            <img src={sellingImage} alt="sell" className="selling-image" />
          </div>
        </div>
      </div>
    )
  }
}
