import {Switch, Route} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAuthUser } from './JS/actions/AuthActions';
import AppNavbar from './Components/Route/AppNavbar';
import Home from './Components/Pages/Home';
import Dashboard from './Components/Pages/Dashboard';
import PrivateRoute from './Components/Routes/PrivateRoute';
import './App.css'
import Add from './Components/Pages/Add';
import MovieList from './Components/Pages/MovieList'



function App() {
  const dispatch = useDispatch()
  const getUser =() => dispatch(getAuthUser())
  useEffect(()=>{
    getUser()
    // eslint-disable-next-line 
  }, [])

  
  return (
    <div>
      <header >
        <AppNavbar />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movieList" component={MovieList}/>
          <Route path={["/Add","/edit/:id"]} component={Add}/>
          <PrivateRoute path="/dashboard" component={Dashboard}/>
        </Switch>
      </header>
    </div>
  );
}

export default App;
