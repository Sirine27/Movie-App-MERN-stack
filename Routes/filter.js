const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();



router.post('/search', async (req, res) => {
	const { type, query } = req.body;

	try {
		let movies;

		if(type === 'text') {
			
			movies = await Movie.find({ $text: { $search: query } });
				
		}

		if (movies.length === 0) {
			movies = await Movie.find({});
		}

		res.status(200).send({ response: movies });
	} catch (err) {
		console.log(err);
		res.status(500).json({msg: 'Please try again later'});
	}
});

module.exports = router;