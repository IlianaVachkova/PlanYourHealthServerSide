/* globals require module String */
"use strict";
const mongoose = require("mongoose");
let foodAdditiveSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating:{
        type:Number,
        required: true
    },
    category:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },   
    purpose:{
        type:String,
        required:true
    },
    madeBy:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
     ingredients: {
        type: [String],
        default: []
    },
});

mongoose.model("FoodAdditive", foodAdditiveSchema);
let FoodAdditiveModel = mongoose.model("FoodAdditive");
module.exports = FoodAdditiveModel;