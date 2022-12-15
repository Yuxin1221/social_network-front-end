

import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import { connect } from 'react-redux'

import React, { Component } from 'react'

import Landing from './components/auth/Landing'

import Main from './components/main/main'
import  Profile from './components/profile/profile'
export  class App extends Component {
    render() {
        return (　　
          <Router>
            
            <Switch>
              <Route exact path={"/"} render={()=> {
                return this.props.isLogin ? <Redirect to="/main"/> : <Landing />
              }}/>  
                
              <Route exact path={"/main"} render={()=> {
                return this.props.isLogin? <Main/> : <Redirect to="/"/>
              }}/>  
  
             <Route exact path={"/profile"} render={()=> {
             return this.props.isLogin ? <Profile/> : <Redirect to="/"/>
              }}/>  
            </Switch>
          </Router>
      
        )
    }
}


export default connect(

    state =>{
        return {
            isLogin:state.isLogin,
            isprofile:state.isprofile,
            ismain:state.ismain
        }}
        )(App)
