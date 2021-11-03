import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
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
        <div>
     <Form style={{"position":"absolute","top":"100px","right":"300px","width": "500px", "fontSize":"13px"}}>
 
  <Form.Field>
      <label>Title</label>
      <input placeholder='Title' name="title" value={movie.title} onChange={handleChange}/>
    </Form.Field>

     

  <Form.Field>
      <label>Date</label>
      <input placeholder='Date' name="date" value={movie.date} onChange={handleChange} />
    </Form.Field>


      
    

  <Form.Field>
      <label>Image</label>
      <input placeholder='Image' name="image" value={movie.image} onChange={handleChange} />
    </Form.Field>
       



  <Form.Field>
      <label>Description</label>
      <input placeholder='Description' name="description" value={movie.description} onChange={handleChange} />
    </Form.Field>

     

  <Form.Field>
      <label>Type</label>
      <input placeholder='Type' name="type" value={movie.type} onChange={handleChange} />
    </Form.Field>



  <Form.Field>
      <label>Link</label>
      <input placeholder='Link' name="link" value={movie.link} onChange={handleChange} />
    </Form.Field>

    
  <Form.Field>
      <label>Rating</label>
      <input placeholder='Rating' name="rating" value={movie.rating} onChange={handleChange} />
    </Form.Field>

    <Link to="/movieList">
             <Button style={{"position":"fixed","bottom":"40px","right": "0", "color":"red", "fontSize":"13px", "backgroundColor":"#181818", "width": "120px","border":"2px solid red"}} variant="primary" type="submit" onClick={handleMovie}>
             {edit? "Edit" : "Add Movie"}
           </Button>
           </Link>
         </Form>

<Link to="/dashboard"> <Button style={{"position":"fixed","bottom":"80px","right": "0", "color":"red", "fontSize":"13px", "backgroundColor":"#181818", "width": "120px","border":"2px solid red"}}>Go To Home</Button></Link>
<Link to="/movieList"><Button style={{"position":"fixed","bottom":"0","right": "0", "color":"red", "fontSize":"13px", "backgroundColor":"#181818", "width": "120px","border":"2px solid red"}}>Movie List</Button></Link>
        </div>
    )
}

 

export default Add;