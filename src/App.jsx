import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Car from './pages/Car'
import Home from './pages/Home'
import {Route,Switch,Redirect} from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
          <Switch>
            <Route path='/car' component={Car}></Route>
            <Route path='/home' component={Home}></Route>
          </Switch>
          <Redirect from='/' to='/car'></Redirect>
        <Footer></Footer>
      </div>
    )
  }
}
