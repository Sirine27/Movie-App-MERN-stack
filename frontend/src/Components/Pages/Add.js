import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Form, Button} from "react-bootstrap";
import { editMovie, postMovie } from '../../JS/actions/movie'
import { Link } from 'react-router-dom';

const Add = () => {
  const [movie,setMovie]=useState({title:"",date:"",image:"",description:"",type:"",link:"",rating:""})
  const movieReducer = useSelector((state)=>state.movieReducer.movie)
  const edit =useSelector((state)=>state.editReducer.edit)
  const dispatch = useDispatch()

  useEffect(()=>{
    edit? setMovie(movieReducer) : setMovie({title:"",date:"",image:"",description:"",type:"",rating:""})
},[movieReducer,edit])    

const handleMovie = ()=>{
  if(!edit){  
      dispatch(postMovie(movie))
  }else {
      dispatch(editMovie(movieReducer._id,movie))
  }
}

const handleChange = (e)=>{
    e.preventDefault();
    setMovie({...movie,[e.target.name]:e.target.value})
}


    return(
        <div style={{"position":"absolute","top":"100px","right":"300px","width": "500px", "color":"red", "fontSize":"13px", "backgroundColor":"#181818","border":"1px"}}>
     <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  
      <Form.Label>Title: </Form.Label>
          
          <Form.Control type="text" placeholder='Title' name="title" value={movie.title} onChange={handleChange}  />
   
  </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Date: </Form.Label>
    <Form.Control type="text" placeholder='Date' name="date" value={movie.date} onChange={handleChange} />
  </Form.Group>




      
      <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Image: </Form.Label>
    <Form.Control type="text" placeholder='Image' name="image" value={movie.image} onChange={handleChange} />
  </Form.Group>


       

      <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Discription: </Form.Label>
    <Form.Control type="text" placeholder='Discription' name="description" value={movie.description} onChange={handleChange} />
  </Form.Group>

      

      <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Type: </Form.Label>
    <Form.Control type="text" placeholder='Type' name="type" value={movie.type} onChange={handleChange} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Link: </Form.Label>
    <Form.Control type="text" placeholder='link' name="link" value={movie.link} onChange={handleChange} />
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Rating:</Form.Label>
    <Form.Control type="text"  name="rating" value={movie.rating} onChange={handleChange} />
  </Form.Group>
    


  
             <Button style={{"position":"fixed","bottom":"40px","right": "0", "color":"red", "fontSize":"13px", "backgroundColor":"#181818", "width": "120px","border":"2px solid red"}} variant="primary" type="submit" onClick={handleMovie}>
             {edit? "Edit" : "Add Movie"}
           </Button>
         </Form>

<Link to="/dashboard"> <Button style={{"position":"fixed","bottom":"80px","right": "0", "color":"red", "fontSize":"13px", "backgroundColor":"#181818", "width": "120px","border":"2px solid red"}}>Go To Home</Button></Link>
<Link to="/movieList"><Button style={{"position":"fixed","bottom":"0","right": "0", "color":"red", "fontSize":"13px", "backgroundColor":"#181818", "width": "120px","border":"2px solid red"}}>Movie List</Button></Link>
        </div>
    )
}

 

export default Add;