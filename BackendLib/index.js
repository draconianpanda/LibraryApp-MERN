const express = require('express');
const libModel  = require("./model/booksDB")
const cors = require('cors');

const app = new express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

//API creation to post data
app.post('/addbooks',async(req,res)=>{
    console.log(req.body)
    var data = await libModel(req.body);
    data.save();
    res.send({status:"Data saved"})
})

//API creation to view data
app.get('/viewbooks',async(req,res)=>{
    // console.log("View")
    var data = await libModel.find();
    res.json(data);
})
// While using the below code , search in body-formdata-and give the id
// app.get('/viewonebooks',async(req,res)=>{
//     let id = req.params._id
//     var data = await libModel.findOne(id);
//     res.json(data);
// })

// app.get('/viewbooks/:id',async(req,res)=>{
//     let id = req.params.id
//     var data = await libModel.findById(id);
//     res.json(data);
// })

//API creation to delete data
app.delete('/deletebooks/:id',async(req,res)=>{
    console.log(req.params)
    let id = req.params.id;
    await libModel.findByIdAndDelete(id);
    res.json({status:"Item deleted"})
})

//API to update data
app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id;
    // we can also use 'try-catch method'
    try{
        await libModel.findByIdAndUpdate(id, req.body)
        res.json({status:"Updated"})
    } 
    catch(err){
        res.status(500).send(err)
    }
})

app.listen(3008,()=>{
    console.log("Port 3008 is up and running")
})