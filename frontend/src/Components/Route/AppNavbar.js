import React from 'react';
import { logoutUser } from '../../JS/actions/AuthActions';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Login from '../Auth/Login';
import Register from '../Auth/Register';
import {Button} from "react-bootstrap";
import './Route.css';

export default function AppNavbar() {
  const dispatch = useDispatch()
  
  const {isAuth, user} =useSelector(state => state.authReducer) 

  const logout = () =>{
    dispatch(logoutUser())
  }
  return (
    <div className= "navbar">
      <div className="container">
        <div className="left">
          Netflix
        </div>
      
        <div className="right">
          
         
          
         {isAuth ?  (
            <div>
            <span> {user.name} </span>
            <Button onClick = {logout}> Logout </Button>
            </div>
          ):(
          <div> 
            <Register />
           <Login />
          </div>)}
        </div>

        </div>


        </div>  
       
      
      
  );
};

