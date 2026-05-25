const jwt = require("jsonwebtoken");

function userMiddleware(req,res,next){
    const authHeader = req.headers.authorization;
    if(!authHeader|| !authHeader.startsWith("Bearer ")){
        return res.status(403).json({
            message:"Token missing"
        })
    }
    const token = authHeader.split(" ")[1];
    try{
        const decoded = jwt.verify(token, process.env.JWT_USER_PASSWORD);
        req.user = decoded;
        next();
    }
    catch(e){
        return res.status(403).json({
          message: "invalid token"
        });
    }

}
module.exports = userMiddleware;
