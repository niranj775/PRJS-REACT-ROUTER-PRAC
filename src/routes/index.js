import React from 'react'
import {Switch} from 'react-router-dom'
import SignIn from '../pages/SignIn/SignIn'
import SignUp from '../pages/SignUp/SignUp'
import Dashboard from '../pages/Dashboard/Dashboard'
import Route from "./Route"

function Routes(){
    return( 
        <Switch>
            <Route path="/" exact component={SignIn}/>
            <Route path="/register" component={SignUp}/>
            <Route path="/dashboard" component={Dashboard} isPrivate/>
            
            <Route component={SignIn}/>
        </Switch>
    )
}

export default Routes