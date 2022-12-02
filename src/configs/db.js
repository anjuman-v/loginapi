const mongoose = require('mongoose')
const mongoDB = "mongodb+srv://loginapi:loginapi@cluster0.ujtrasc.mongodb.net/?retryWrites=true&w=majority"

module.exports = ()=>mongoose.connect(mongoDB)