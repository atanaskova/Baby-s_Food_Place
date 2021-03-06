const express=require('express');
const app=express();
const cors=require('cors');
const router=require('./routers/user');
const jwt=require('express-jwt');
const unauthorizedErrorHandler=require('../../lib/handlers/unauthorized-error-handler');
const serverStartLogger=require('../../lib/handlers/server-start-logger');

require('../../lib/db/db');
require('dotenv').config();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended: true}));
app.use(cors());
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
// app.use(jwt({
//     secret:process.env.SECRET_AUTH_KEY,
//     algorithms:['HS256']
// }).unless({
//     path:[
//         {
//             url:'/api/user/login', methods:['POST']
//         },
//         {
//             url:'/api/user/register', methods:['POST']
//         }
//     ]
// }));
app.use((err,req,res,next)=>unauthorizedErrorHandler(err,req,res,next));
app.use('/api/user', router);
app.listen(process.env.AUTH_API_PORT, error=>serverStartLogger('User',process.env.AUTH_API_PORT,error));