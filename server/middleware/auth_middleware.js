const jwt=require('jsonwebtoken');

const auth_middleware=async(req,res,next)=>{
    try {
        const token=req.headers.authorization.split(" ")[1];
        const isCustomAuth=token.length<500;

        let decodedData;

        if(token && isCustomAuth){
            decodedData=jwt.verify(token,process.env.SECRET_AUTH_KEY);

            req.userId=decodedData.id;
        }else{
            decodedData=jwt.decode(token);

            req.userId=decodedData.sub;
        }
        next();
    } catch (error) {
        console.log(error);
    }
}

module.exports=auth_middleware;