import React from 'react'
import {Route , Switch, Redirect} from 'react-router-dom'
import UserLoginPage from './containers/UserLoginPage'
import ChatWindowPage from './containers/ChatWindowPage'


export default function App(){
  return(
    <Switch>
      <Route path={'/'} exact component={UserLoginPage}/>
      <Route path={'/chatwindow'} exact component={ChatWindowPage}/>
      </Switch>
  )
}