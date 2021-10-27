import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {Button} from "react-bootstrap";
import Movie from './Movie';
import Filter from './Filter';
import { getMovies } from '../../JS/actions/movie';



const   MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state)=>state.movieReducer.movies)
  const loadMovies = useSelector((state)=>state.movieReducer.loadMovies)

  useEffect(()=>{
        
    dispatch(getMovies())
    //eslint-disable-next-line
},[])

    return (
<div style={{"display":"flex", 'flexDirection': 'column',"paddingTop":"100px"}}>
        <div style={{"display":"flex", 'flexDirection': 'column',"alignItems": "center"}}>
        <Filter />
        </div>
        <div style={{"display":"flex", "flexWrap": "wrap","paddingTop":"50px"}}>
          
        <div>

{loadMovies?(
              
              <h3>Loading</h3>
              
          ):movies.length === 0 ?(<h2>there is no data</h2>):(
              movies.map((el)=> <Movie key={el._id} movie={el}  /> )
          )}
</div>

           <Link to="/dashboard"> <Button style={{"position":"fixed","bottom":"0","right": "0", "color":"red", "fontSize":"13px", "backgroundColor":"#181818", "width": "120px","border":"2px solid red"}}>Go To Home</Button></Link>
        </div>
      </div>  
    )
}

export default MovieList
