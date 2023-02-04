import {Schema, model} from "mongoose";

const UserScheme = new Schema(
    {
        name:{
            type:String
        },
        email:{
            type:String,
            unique:true
        },
        age:{
            type:Number
        }
    },
    {
        timestamps: true,
        versionKey:false
    }
);
export default model("users",UserScheme);