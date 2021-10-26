import { EDIT_MOVIE, GET_MOVIE, GET_MOVIE_FAIL,GET_MOVIE_LOAD,GET_MOVIE_SUCCESS } from "../constant/movie"
import axios from "axios"

export const getMovies=()=>async(dispatch)=>{
    dispatch({type:GET_MOVIE_LOAD})
    try {
        let result = await axios.get(`/api/movies`)
        dispatch({type:GET_MOVIE_SUCCESS,payload: result.data.response})
    } catch (error) {
        dispatch({type:GET_MOVIE_FAIL})
        console.log(error)
    }
}

export const deleteMovie = (id)=>(dispatch)=>{
    axios
    .delete(`/api/movies/${id}`)
    .then((res=>dispatch(getMovies())))
    .catch((err)=>console.log(err))
}
export const getMovie = (id)=>(dispatch)=>{
    axios.get(`/api/movies/${id}`)
    .then((res)=>dispatch({type:GET_MOVIE,payload:res.data.response}))
    .catch((err)=>console.log(err))
}

//edit MOVIE
export const editMovie = (id,user)=>(dispatch)=>{
    axios.put(`/api/movies/${id}`,user)
    .then((res)=>{
        dispatch({type:EDIT_MOVIE,payload:res.data.msg})
    })
    .then(dispatch(getMovies()))
    .catch((err)=>console.log(err))
}
//post MOVIE
export const postMovie = (user)=>async(dispatch)=>{
    try {
        await axios.post(`/api/movies/create`,user)
        dispatch(getMovies())
    } catch (error) {
        console.log(error.response)
    }
}
