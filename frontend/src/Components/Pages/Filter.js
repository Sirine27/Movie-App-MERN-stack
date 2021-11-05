import React, { useState } from 'react';
import { getMoviesByFilter } from '../../JS/actions/filterActions';
import { useDispatch } from 'react-redux'

const Filter = () => {
    const [text, setText] = useState('');

    const dispatch = useDispatch()

    const handleSearch = e => {

		setText(e.target.value);

		dispatch(getMoviesByFilter({ type: 'text', query: e.target.value }));
	};
    return (
        <div>
 <h1 style={{marginBottom:'20px'}}>Movie App</h1>

     <input
		className='form-control mr-sm-2'
		type='search'
		placeholder='Search'
		aria-label='Search'
		name='search'
		value={text}
		onChange={handleSearch}
	/>
 
 
        </div>
    )
}

export default Filter;
