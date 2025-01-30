import {model,Schema} from 'mongoose'
// description, due date, priority, status
const taskSchema=new Schema({
    title:{
        type:String,
        required:true

    },
    description:{
        type:String,
        trim:true,
        required:true,
    },
    dueDate:{
        type:Date,
        required:true
    },
    priority:{
        type:String,
        enum:["low","medium","high"],
        default:"medium"
    },
    status:{
        type:String,
        enum:["Todo","inProgress","Done"],
        default:"Todo"

    }
},{
    timestamps:true
})
const Task=model("task",taskSchema)
export {Task}