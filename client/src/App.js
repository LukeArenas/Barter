import './App.css'
import React, { Component } from 'react'
import Welcome from './pages/Welcome'
import Buy from './pages/Buy'
import ItemDetails from './pages/ItemDetails'
import { Switch, Route } from 'react-router-dom'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      username: 'test',
      recentlyViewed: [],
      selectedListing: '',
      addedToCart: []
    }
  }

  //METHODS

  handleUsername = (event) => {
    this.setState({ username: event.target.value })
  }

  viewListing = (event) => {
    console.log(event)
  }

  handleSelection = (id) => {
    this.setState({ selectedListing: id })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Welcome handleUsername={this.handleUsername} />}
          />
          <Route
            path="/buy"
            render={(reactProps) => (
              <Buy
                recentlyViewed={this.state.recentlyViewed}
                viewListing={this.viewListing}
                handleSelection={this.handleSelection}
                {...reactProps}
              />
            )}
          />
          <Route
            path="/item-details/:id"
            render={() => (
              <ItemDetails selectedListing={this.state.selectedListing} />
            )}
          />
        </Switch>
      </div>
    )
  }
}
