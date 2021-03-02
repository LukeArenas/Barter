import './App.css'
import React, { Component } from 'react'
import Welcome from './pages/Welcome'
import Buy from './pages/Buy'
import ItemDetails from './pages/ItemDetails'
import Cart from './pages/Cart'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from './globals'

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

  addToCart = async () => {
    const itemToAdd = await axios.get(
      `${BASE_URL}/listings/${this.state.selectedListing}`
    )
    const currentCart = this.state.addedToCart
    const newCart = [...currentCart, itemToAdd.data.listing]
    this.setState({ addedToCart: newCart })
    console.log(itemToAdd.data.listing)
  }

  render() {
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
            render={(reactProps) => (
              <ItemDetails
                selectedListing={this.state.selectedListing}
                addToCart={this.addToCart}
                {...reactProps}
              />
            )}
          />
          <Route
            path="/cart"
            render={() => <Cart addedToCart={this.state.addedToCart} />}
          />
        </Switch>
      </div>
    )
  }
}
