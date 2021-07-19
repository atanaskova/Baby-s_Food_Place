const express=require('express');
const app=express();
const router=require('./routers/recipes');
const jwt=require('express-jwt');
const unauthorizedErrorHandler=require('../../lib/handlers/unauthorized-error-handler');
const serverStartLogger=require('../../lib/handlers/server-start-logger');

require('../../lib/db/db');
require('dotenv').config();

app.use(express.json());
app.use(jwt({
    secret:process.env.SECRET_AUTH_KEY,
    algorithms:['HS256']
}).unless({
    path:[
        {
            url:'/recipes',methods:['GET']
        }
    ]
}));
app.use((err,req,res,next)=>unauthorizedErrorHandler(err,req,res,next));
app.use('/recipes',router);
app.listen(process.env.RECIPE_API_PORT,error=>serverStartLogger('Recipe',process.env.RECIPE_API_PORT,error));