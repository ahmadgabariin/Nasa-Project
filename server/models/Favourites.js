const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

const favouriteSchema = new Schema({
    title : String ,
    id : String ,
    description : String ,
    url : String ,
    isLiked : Boolean 
})

const Favourites = mongoose.model(`favourite` , favouriteSchema , `Favourites`)

module.exports = Favourites