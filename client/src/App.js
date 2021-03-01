import './App.css'
import React, { Component } from 'react'
import Welcome from './pages/Welcome'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      recentlyViewed: [],
      selectedListing: '',
      addedToCart: []
    }
  }

  //METHODS

  handleUsername = (event) => {
    this.setState({ username: event.target.value })
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <Welcome
          // username={this.state.username}
          handleUsername={this.handleUsername}
        />
      </div>
    )
  }
}
