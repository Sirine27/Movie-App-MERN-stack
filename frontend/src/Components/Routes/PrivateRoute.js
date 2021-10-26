import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import Home from '../Pages/Home';


const PrivateRoute = ({component : Component , ...rest}) => {
    const isAuth = useSelector((state) => state.authReducer.isAuth)
    if(isAuth===true){
        return <Route component={Component}  {...rest} />
    }
    return <Home/>
}

export default PrivateRoute
