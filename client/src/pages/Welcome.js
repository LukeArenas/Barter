import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      showBuyPage: false
    }
  }
  handleWelcomeSubmit = () => {
    this.setState({ showBuyPage: true })
  }

  render() {
    if (this.state.showBuyPage) {
      return <Redirect to="/buy" />
    }
    return (
      <div>
        {/* <Header /> */}
        <div onSubmit={this.handleWelcomeSubmit}>
          <h3>Hi There!</h3>
          <p>Please enter your username:</p>
          <form>
            <input
              type="text"
              placeholder="Enter username"
              onChange={this.props.handleUsername}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
        {/* <Footer /> */}
      </div>
    )
  }
}
