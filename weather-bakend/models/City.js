const mongoose = require("mongoose");

const citySchema = mongoose.Schema(
    {
        id : {
            type : Number,
            required: true,
        },
        name : {
            type: String,            
            required: true,
            trim: true,
          },
        country:  {
            type: String,
            required: true,
            trim: true,
          },
    });

    module.exports = mongoose.model("City", citySchema);