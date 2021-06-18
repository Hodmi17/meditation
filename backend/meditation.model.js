const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Meditation = new Schema ({
    meditation_name:{
        type: String,
    },
    duration:{
        type: String,
    },
    date:{
        type:String,
    } ,
    

})

module.exports = mongoose.model('Meditation', Meditation);