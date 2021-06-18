const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
let Meditation = require('./meditation.model')
mongoose.connect('mongodb+srv://hodannur:fanax123@cluster0.lddrn.mongodb.net/MeditationApplications?retryWrites=true&w=majority',{useNewUrlParser:true})
const connection = mongoose.connection;
connection.once('open', function(){
    console.log('Database connections successful')
})


app.use(cors());
app.use(bodyParser.json());


app.post('/meditationTracker',function(req,res){
    let exampleMeditation ={
        meditation_name: req.body.meditation_name ,
        duration: req.body.duration,
        date:req.body.date,
        
    
    };
    console.log(req.body);
    let newMeditation = new Meditation (exampleMeditation);
        newMeditation.save()
            .then(meditation=> {
                console.log('res', meditation);
                res.json({message:'successful'});
            })
            .catch(err =>{
                console.log('error', error);
            });
            
})
app.get('/retrieveMeditation', function (req,res){
    Meditation.find()
    .then(meditation =>{
        res.json(meditation);
    })
})
app.post('/delete', function (req,res){
    Meditation.findByIdAndRemove(req.body.id)
    .then(deleteRes =>{
        console.log(deleteRes);
        res.send({message: 'successful'})
    })
})

app.get('/', function (req,res){
    res.send({message:"hello"})
})

app.listen(3002, function(){
    console.log('Listening to port 3001');
})

