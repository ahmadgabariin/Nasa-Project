const express = require(`express`)
const router = express.Router()
const axios = require('axios')
const key = require(`../../config/api-key`)
const Favourites = require(`../models/Favourites`)

router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

router.get(`/pictureOfTheDay`, function (request , response) {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
    .then (data => response.send(data.data))
    .catch(error => response.status(500).send(error))
} )

router.get(`/search/:wordKey` , function (request , response) {
    const word = request.params.wordKey
    Favourites.find({} , function (error , favourites) {
        if (error) {  response.status(500).send(error) }
        else {
            const favouritesID = favourites.map(favourite => favourite.id)
            const setID = new Set(favouritesID)
            if (word.trim()) {
                axios.get(`https://images-api.nasa.gov/search?q=${word}`)
                .then( data =>{
                    const dataArray = data.data.collection.items.splice(0, 10)
                    const mydata = dataArray.map( data => filterData(data , setID) )
                    dataArray.length > 0
                     ? response.send(mydata) 
                     : response.status(404).send( dataArray)
                })
                .catch( error => response.status(500).send(error))
            }
            else {
                response.status(400).send(`Please enter a text`)
            }
        }
    })
    
})

router.get(`/` , function(request , response) {
    response.send(`Hello there!`)
})

router.get(`/favourites` , function (request , response) {
    Favourites.find({} , function (error , data) {
        error 
        ? response.status(500).send(error)
        : response.send(data) 
    })
})

router.post(`/favourites` , function (request , response) {
    const post = request.body
    post.isLiked = true
    const favouritePost = new Favourites(post)
    favouritePost.save( function(error , post) {
        response.status(201).send(post)
    })
})

router.delete(`/favourites/:postID` , function (request , response) {
    const postID = request.params.postID
    Favourites.findOneAndDelete ({id : postID} , function (error ,data) {
        error 
        ? response.status(500).send(error.message)
        : data ? response.send(data) : response.status(404).send(`ID Not Found`)
    })
} )

function filterData (data , setID) {
    return  {
        title : data.data[0].title ,
        id : data.data[0].nasa_id ,
        description : data.data[0].description ,
        url : data.links[0].href  ,
        isLiked : setID.has(data.data[0].nasa_id)
    }   
}

module.exports = router