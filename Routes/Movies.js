const Router = require("express").Router();
const Movie = require("../models/Movie");


//CREATE

Router.post("/create",  async (req, res) => {
  
    const newMovie = new Movie(req.body);
    try {
      const savedMovie = await newMovie.save();
      res.status(200).json({msg:'Entry succesfully inserted to the DB', savedMovie});
    } catch (error) {
      res.status(500).json({error : err})
    }

});

//Get all Movies
Router.get('/',async(req,res)=>{

  try {
      const result = await Movie.find()
      res.status(200).send({response:result ,msg:"get Movies Success"})
  } catch (error) {
      res.status(500).send({msg:"can not get Movies"})
  }
  });

//Get One By ID
Router.get('/:id',async(req,res)=>{
  try {
      const result = await Movie.findOne({_id:req.params.id})
      res.status(200).send({response:result ,msg:"get Movie by Id Success"})
  } catch (error) {
      res.status(500).send({msg:"can not get Movie check Movie ID"})
  }
});

//Delete By ID
 Router.delete("/:id",async(req,res)=>{ 
   try {
      const result = await Movie.deleteOne({_id:req.params.id})
       result ? res.status(200).send({msg:"Movie Deleted"}) 
       :res.status(400).send("there is no Movie With thids ID ") 
      } catch (error) {
         res.status(500).send({msg:"Error can not delete Movie"})
      } 


    }); 
    
    // Update Contact By ID
    
    Router.put("/:id",async(req,res)=>{ 
      
      try { 
      const result = await Movie.updateOne({_id:req.params.id},{$set:{...req.body}}) 
      result ? res.status(200).send({msg:"Movie Updated"}) 
      :res.status(400).send("there is no Movie With thids ID ") 
    } catch (error) { 
      res.status(500).send({msg:"Error can not Update Movie"}) 
    }


  });




module.exports = Router;