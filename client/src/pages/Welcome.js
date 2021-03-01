import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <div onSubmit={this.props.handleWelcomeSubmit}>
          <h3>Hi There!</h3>
          <p>Please enter your username:</p>
          <form>
            <input
              type="text"
              placeholder="Enter username"
              onChange={this.props.handleUsername}
            />
            <input type="submit" value="Let's go" />
          </form>
        </div>
        {/* <Footer /> */}
      </div>
    )
  }
}
