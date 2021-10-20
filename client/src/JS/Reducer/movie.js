import { EDIT_MOVIE, GET_MOVIE, GET_MOVIE_FAIL,GET_MOVIE_LOAD,GET_MOVIE_SUCCESS } from "../constant/movie"

const initialState ={
    movies : [],
    loadMovies: false,
    errors:{},
    movie: {},
    editmovie:""
}

export const movieReducer = (state=initialState, {type,payload}) =>{
    switch (type) {
        case GET_MOVIE_LOAD:
            return {...state,loadMovies:true}
        case GET_MOVIE_SUCCESS:
            return {...state,movies:payload,loadMovies:false}
        case GET_MOVIE_FAIL :
            return {...state,loadMovies:false, errors:payload}
        case GET_MOVIE :
            return{...state,movie:payload}
        case EDIT_MOVIE :
            return {...state,editMovie:payload}
            
    
        default:
         return   state
    }
}