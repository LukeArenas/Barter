import './App.css'
import React, { Component } from 'react'
import Welcome from './pages/Welcome'
import Buy from './pages/Buy'
import Sell from './pages/Sell'
import ItemDetails from './pages/ItemDetails'
import Cart from './pages/Cart'
import { Switch, Route, NavLink } from 'react-router-dom'
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

  removeFromCart = (id) => {
    const newCart = this.state.addedToCart.filter((item) => {
      return item._id !== id
    })
    this.setState({ addedToCart: newCart })
    console.log(this.state.addedToCart)
  }

  updateRecentlyViewed = async () => {
    const itemToAdd = await axios.get(
      `${BASE_URL}/listings/${this.state.selectedListing}`
    )
    const currentViewed = this.state.recentlyViewed
    const newViewed = [...currentViewed, itemToAdd.data.listing]
    this.setState({ recentlyViewed: newViewed })
    console.log(newViewed)
  }

  render() {
    return (
      <div className="app">
        <nav>
          <h1>freetrade</h1>
          <NavLink to="/buy">Buy</NavLink>
          <NavLink to="/sell">Sell</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </nav>
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
                updateRecentlyViewed={this.updateRecentlyViewed}
                {...reactProps}
              />
            )}
          />
          <Route path="/sell" render={() => <Sell />} />
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
            render={() => (
              <Cart
                addedToCart={this.state.addedToCart}
                removeFromCart={this.removeFromCart}
              />
            )}
          />
        </Switch>
        <footer>Contact Us:</footer>
      </div>
    )
  }
}
