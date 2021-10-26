import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import { Button } from "react-bootstrap"
import {useDispatch} from 'react-redux'
import { toggleFalse } from '../../JS/actions/edit';



const Dashboard = () => {
    const user = useSelector(state=> state.authReducer.user)
    const dispatch = useDispatch()
  
    return (
        <div>
           {!user ? ( <h1>go to login</h1>): user.isAdmin === false ? (
              <div>
                 <img style={{'width': '100%','height': '530px'}}
                  src="https://www.avcesar.com/source/actualites/00/00/65/75/top-50-des-meilleures-series-tv-la-moitie-pour-netflix_11543111.jpg"
                  alt=""
                  />
                      <Link to="/movieList"><Button style={{"position":"fixed","bottom":"40px","right": "0", "color":"red", "fontSize":"13px", "backgroundColor":"black", "width": "120px","border":"2px solid red"}}>Movie List</Button></Link>
               </div>
           ) : user.isAdmin === true ? ( <div> 
                <img style={{'width': '100%','height': '530px'}}
                  src="https://www.avcesar.com/source/actualites/00/00/65/75/top-50-des-meilleures-series-tv-la-moitie-pour-netflix_11543111.jpg"
                  alt=""
                  />
                      <Link to="/movieList"><Button style={{"position":"fixed","bottom":"40px","right": "0", "color":"red", "fontSize":"13px", "backgroundColor":"black", "width": "120px","border":"2px solid red"}}>Movie List</Button></Link>
            <img style={{'width': '100%','height': '530px'}}
            src="https://www.avcesar.com/source/actualites/00/00/65/75/top-50-des-meilleures-series-tv-la-moitie-pour-netflix_11543111.jpg"
            alt=""
            />
<Link to="/Add">
<Button onClick={()=>dispatch(toggleFalse())} style={{"position":"fixed","bottom":"0","right": "0", "color":"red", "fontSize":"13px", "backgroundColor":"black", "width": "120px","border":"2px solid red"}}>Add Movie</Button>
</Link>

             </div>
         ):(<></>)} 
        </div>
    )
}

export default Dashboard
