const mongoose=require("mongoose");
require('dotenv').config();

mongoose.connect(`mongodb+srv://Taci_1998:${process.env.MONGO_DB_PASS}@babysfoodplace.vihaa.mongodb.net/BabysFoodPlace?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});