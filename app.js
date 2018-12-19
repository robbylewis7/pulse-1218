import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Landing from './landingPage'
import Signup from './signup'
import Main from './main'


export default class App extends React.Component {
  render () {

    return (
      <div>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/main' component={Main}/>
      </div>
    )
  }
}
