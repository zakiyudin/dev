import jwt from 'jsonwebtoken'
import Users from '../models/usersModel.js'
import asyncHandler from 'express-async-handler'

const authorize = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decodeJwt = jwt.verify(token, process.env.JWT_KEY);

            req.user = await Users.findById(decodeJwt.id).select('-password');
            next();
        } catch (error) {
            console.log(error);
            res.status(401).json({
                success: false,
                message: 'Unauthorized'
            });
        }
    }

    if(!token){
        res.status(401).json({
            success: false,
            message: 'Unauthorized, no token provided'
        });
    }
})

export default authorize;