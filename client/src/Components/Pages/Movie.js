import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card } from 'react-bootstrap'
import {Rating} from '@material-ui/lab';
import { Link } from 'react-router-dom'
import { deleteMovie,getMovie } from '../../JS/actions/movie' 
import { toggleTrue } from '../../JS/actions/edit'


const Movie = ({movie}) => {
  const user = useSelector(state=> state.authReducer.user)
    const dispatch =useDispatch()
    return (
        <div>
       <Card style={{marginLeft:'50px', marginBottom:'50px', backgroundColor:'#282c34', height:'450px', width: '270px' }}>
  <Card.Img variant="top" style={{ width:'auto', height:'40%'}} src={movie.image} />
  <Card.Body style={{'display': 'flex','flexDirection': 'column','justifyContent': 'center'}} >
  <Card.Title>{movie.title}</Card.Title>
    <Card.Text>{movie.date}</Card.Text>
    <Card.Text>{movie.description}</Card.Text>
    <Card.Text>{movie.type}</Card.Text>
    <Card.Link href={movie.link}>Go to Movie</Card.Link>
    <Rating name="read-only" value={movie.rating} readOnly/>
 
     { user === null ?(<></>):user.isAdmin === true ? (        <div>
        <Link to={`/edit/${movie._id}`} >
          <Button variant="success" 
          onClick={()=>{dispatch(getMovie(movie._id));
                        dispatch(toggleTrue())}}>
            Edit
          </Button></Link>
          <Button variant="danger" 
          onClick={()=>dispatch(deleteMovie(movie._id))}>
            Delete
          </Button>
        </div>):(<></>)}

        </Card.Body>
</Card>
        </div>
    )
}

export default Movie