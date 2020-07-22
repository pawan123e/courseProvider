
import React from 'react'
import SignUp from '../components/SignUp'
import Navbar from '../layouts/Navbar'
import Course from '../components/Course'
import Login from '../components/Login'
import Videos from '../components/Videos'
import Dashboard from '../components/Dashboard'
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import PrivateRoute from '../PrivateRoute'

const Routes = ({auth}) => {
    return (
        <> 
        <Route exact path = '/login' component = {Login}/>
        {auth.isAuthenticated && <Navbar/>}
        <Navbar/>
        <Switch>
          <Route exact path = '/' component = {Dashboard}/>
          <Route path = '/signUp' component = {SignUp}/>
          <Route path = '/course' component = {Course}/>
          <Route path = '/Video' component = {Videos}/>
          </Switch>
          </>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Routes)
