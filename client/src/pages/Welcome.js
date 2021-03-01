import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <div>
          <h3>Hi There!</h3>
          <p>Please enter your username:</p>
          <form>
            <input
              type="text"
              placeholder="Enter username"
              value={this.props.username}
              onChange={this.props.handleUsername}
            />
            <input type="submit" value="submit" />
          </form>
        </div>
        {/* <Footer /> */}
      </div>
    )
  }
}
