const mongoose = require ("mongoose");


mongoose.connect("mongodb+srv://kiranarakkal16:kirana@cluster0.47et8bv.mongodb.net/libmstapp?retryWrites=true&w=majority")
.then(()=>{
    console.log("DB connected")
})
.catch(err=>console.log(err))

let Schema = mongoose.Schema;

const libSchema = new Schema({
    bookName:String,
    author:String,
    language:String,
    genre:String,
    bookNum:Number
});
var libModel = mongoose.model("book" , libSchema);

module.exports = libModel;