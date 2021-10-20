import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {Button} from "react-bootstrap";
import { getMovies } from '../../JS/actions/movie';
import Movie from './Movie';

const   MovieList = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state)=>state.movieReducer.movies)
    const loadMovies = useSelector((state)=>state.movieReducer.loadMovies)

    useEffect(()=>{
        
        dispatch(getMovies())
        //eslint-disable-next-line
    },[])

    return (
        <div style={{"display":"flex", "flexWrap": "wrap","paddingTop":"100px"}}>
           {loadMovies?(
               <h3>Loading</h3>
           ):movies.length === 0 ?(<h2>there is no data</h2>):(
               movies.map((el)=> <Movie key={el._id} movie={el}  /> )
           )}

           <Link to="/dashboard"> <Button style={{"position":"fixed","bottom":"0","right": "0", "color":"red", "fontSize":"13px", "backgroundColor":"#181818", "width": "120px","border":"2px solid red"}}>Go To Home</Button></Link>
        </div>
    )
}

export default MovieList
