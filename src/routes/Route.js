import React from 'react'
import PropTypes from "prop-types"
import {Route, Redirect} from 'react-router-dom'

function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest 
}){
    const signed = true

    // Route is Private and the User is not logged in
    if(isPrivate && !signed) {
        return <Redirect to="/" />
    } 

    //Route is Public and the User is logged in
    if(!isPrivate && signed){
        return <Redirect to="/dashboard" />
    }

    return <Route {...rest} component={Component} />
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

RouteWrapper.defaultProps = {
    isPrivate: false
}

export default RouteWrapper