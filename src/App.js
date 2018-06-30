import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import PizzaContainer  from './components/PizzaContainer'
import { Link } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">

          <h1>Welcome to your personal Pizza Generator!</h1>
          <PizzaContainer />
        </div>

      </Provider>
    );
  }
}

export default App;
