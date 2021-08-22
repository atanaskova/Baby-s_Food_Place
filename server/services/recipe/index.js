const express=require('express');
const app=express();
const cors=require('cors');
const router=require('./routers/recipes');
const jwt=require('express-jwt');
const unauthorizedErrorHandler=require('../../lib/handlers/unauthorized-error-handler');
const serverStartLogger=require('../../lib/handlers/server-start-logger');

require('../../lib/db/db');
require('dotenv').config();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));
// app.use(jwt({
//     secret:process.env.SECRET_AUTH_KEY,
//     algorithms:['HS256']
// }).unless({
//     path:[
//         {
//             url:'/recipes',methods:['GET']
//         }
//     ]
// }));
app.use(cors());
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });
app.use((err,req,res,next)=>unauthorizedErrorHandler(err,req,res,next));
app.use('/recipes',router);
app.listen(process.env.RECIPE_API_PORT,error=>serverStartLogger('Recipe',process.env.RECIPE_API_PORT,error));