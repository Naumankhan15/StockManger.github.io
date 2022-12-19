import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const RegisterSchema = mongoose.Schema({
    _id: Number,
    Name: {
        type: String,
        required: [true,"Name is required"],
        lowercase:true,
        trim: true,
    },
    Email: {
        type: String,
        required: [true,"Email is required"],
        unique: true,
        lowercase: true,
        trim: true
    },
    Password: {
        type: String,
        required: [true,"Password is required"],
        maxlength: 10,
        minlength: 5,
        trim: true
    },
    Mobile: {
        type: String,
        required: [true,"Number is required"],
        maxlength: 10,
        minlength: 10,
        trim: true
    },
    Address: {
        type: String,
        required: [true,"Address is required"],
        trim: true
    },
    City: {
        type: String,
        required: [true,"City is required"],
        trim: true
    },
    Gender: {
        type: String,
        required: [true,"Gender is required"],
    },
    role:String,
    status:Number,
    info:String
    
    
});


//apply the unique validator plugin to registerschema
RegisterSchema.plugin(uniqueValidator);

// compile schema to model
const RegisterSchemaModel = mongoose.model("practice", RegisterSchema, "practice");


export default RegisterSchemaModel