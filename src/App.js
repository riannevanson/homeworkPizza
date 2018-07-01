import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import PizzaContainer  from './components/PizzaContainer'
import PizzaBase  from './components/PizzaBase'
import PizzaSauce  from './components/PizzaSauce'
import PizzaToppings  from './components/PizzaToppings'
import PizzaTotalPrice  from './components/PizzaTotalPrice'
import ResultPage  from './components/ResultPage'
import { Link } from "react-router-dom"


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">

          <h1>Welcome to your personal Pizza Generator!</h1>
          <PizzaContainer />
          <PizzaBase />
          <PizzaSauce />
          <PizzaToppings />
          <PizzaTotalPrice /><br /><br /><br /><br />


          <ResultPage />
        </div>

      </Provider>
    );
  }
}

export default App;
