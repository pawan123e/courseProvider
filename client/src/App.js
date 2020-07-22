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
import Dashboard from './components/Dashboard'
import Routes from './routes/Routes'

function App() {
  return (
    <Router>
      
      <Provider store = {store}>
      <Routes/>
      
      {/* <Navbar/>
          <Route exact path = '/' component = {Dashboard}/>
          <Route exact path = '/login' component = {Login}/>
          <Route path = '/signUp' component = {SignUp}/>
          <Route path = '/course' component = {Course}/>
          <Route path = '/Video' component = {Videos}/> */}
        </Provider>
    </Router>
  );
}


export default App;


