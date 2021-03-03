import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

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
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}
