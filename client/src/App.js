import './App.css'
import React, { Component } from 'react'
import Welcome from './pages/Welcome'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }
  }
  render() {
    return (
      <div>
        <Welcome />
      </div>
    )
  }
}
