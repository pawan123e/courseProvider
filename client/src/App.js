import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import Navbar from './layouts/Navbar'
import Login from './components/Login'
import PrivateRoute from './PrivateRoute'
import SignUp from './components/SignUp'
import Course from './components/Course'
import Videos from './components/Videos'

function App() {
  return (
    <Router>
      <Provider store = {store}>
          <Route exact path = '/login' component = {Login}/>
          <Route path = '/' component = {Navbar}/>
          <Route path = '/signUp' component = {SignUp}/>
          <Route path = '/course' component = {Course}/>
          <Route path = '/Video' component = {Videos}/>
        </Provider>
    </Router>
  );
}

export default App;
