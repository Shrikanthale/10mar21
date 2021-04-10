import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
   name:{
       type:String,
       require:true
   },
    gender:{
    type:String,
    require:true
}, 
   address:{
    type:String,
    require:true
},
    age:{
    type:String,
    require:true
}

},{timestamps:true})

export const user=mongoose.model('User',userSchema)