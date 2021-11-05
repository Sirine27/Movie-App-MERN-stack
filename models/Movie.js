const mongoose = require("mongoose");


const {Schema, model} = mongoose

const movieSchema = new Schema(
  {
    title: { type: String, required: true, unique: true, trim: true },
    date: { type: Number, required: true  },
    description: { type: String, required: true},
    image: { type: String, required: true, unique: true },
    type: { type: String, required: true},
    link: { type: String, required: true, unique: true },
    rating: { type: Number,required: true },
    
    
  },
  
);
movieSchema.index({ title: 'text' });
module.exports= Movie = model('Movie', movieSchema);