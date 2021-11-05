import axios from 'axios';
import { GET_MOVIE_SUCCESS, GET_MOVIE_FAIL } from '../constant/movie';


export const getMoviesByFilter = arg => async dispatch => {
	try {
		const result = await axios.post('/api/filter/search', arg);

		dispatch({
			type: GET_MOVIE_SUCCESS,
			payload: result.data.response,
		});
	} catch (err) {
		console.dir(err);
		dispatch({ type: GET_MOVIE_FAIL });
	
	}
};