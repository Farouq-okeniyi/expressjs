const express = require('express')

const moviecontroller = require('./../controller/movieshandler')
// app.use(Gettime)
// function Gettime(req,res,next){
//     req.Gettimer = new Date().toISOString();
//     next()
// }



const Router = express.Router();

Router.param('id', moviecontroller.chekcid)

Router.route('/')


            .get(moviecontroller.GetAllMovies)
            .post(moviecontroller.CreateMovies);


Router.route('/:id')


            .get( moviecontroller.chekcid,moviecontroller.GetMovies)
            .patch(moviecontroller.PatchMovies)
            .delete(moviecontroller.DeleteMovies);



module.exports = Router;