import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import Users from '../models/usersModel.js'


// @desc    Get Data
// @route   GET /api/
// @access  private
const getData = asyncHandler(async (req, res) => {
    const users = await Users.findById(req.user.id)
    res.status(200).json(users)
})

// @desc Get All Data
// @route GET /api/user/getAlldata
// @access private
const getAllData = asyncHandler(async (req, res) => {
    const users = await Users.find()
    res.status(200).json(users)
})

// @desc    Register User
// @route   POST /api/user/register
// @access  private
const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    // validation
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please enter all fields')
    }

    // check if user already exists
    const userExist = await Users.findOne({ email })
    if (userExist) {
        res.status(400)
        throw new Error('User already exists')
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const user = await Users.create({
        name,
        email,
        password : hashPassword
    })

    if(user){
        res.status(201).json({
            success: true,
            data: {
                name: user.name,
                email: user.email,
                token: generateJWT(user._id)
            }
        })
    }else{
        res.status(500).json({
            success: false,
            message: 'User not created'
        })
    }
})

// @desc    Login User
// @route   POST /api/user/login
// @access  private
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    // validation
    if (!email || !password) {
        res.status(400)
        throw new Error('Please enter all fields')
    }

    // check if user already exists
    const user = await Users.findOne({ email })
    if(user && bcrypt.compareSync(password, user.password)){
        res.json({
            success: true,
            data: {
                name: user.name,
                email: user.email,
                token: generateJWT(user._id)
            },
            message: 'User logged in',
        })
    }else{
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

const generateJWT = (id) => {
    return jwt.sign({id}, process.env.JWT_KEY, {
        expiresIn: '1h'
    })
}


export default {
    getData,
    register,
    login,
    getAllData
}