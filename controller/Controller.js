const User = require("../model/Model");

// Creating user
const createUser = async (req, res) => {

    try {
        const userCreate = await User.create(req.body)
        res.status(200).json(userCreate)
    } catch (error) {
        res.status(500).json(error)
    }
}

// Getting all users
const getUser = async (req, res) => {

    try {
        const userGet = await User.find()
        res.status(200).json(userGet)
    } catch (error) {
        res.status(500).json(error)
    }
}

//Getting one user
const getOneUser = async (req, res) => {
    // console.log(req.params.id)
    // return; 

    try {
        const userGet = await User.findById(req.params.id)
        res.status(200).json(userGet)
    } catch (error) {
        res.status(500).json(error)
    }
}

//delete user
const deleteUser = async (req, res) => {
    const {id} = req.params


    try {
        const userGet = await User.findByIdAndDelete(id)
        if (!userGet){
            return res.status(404).json(`No such user $`)
        }
        res.status(200).json(userGet)
    } catch (error) {
        res.status(500).json(error)
    }
}

//Update user
const updateUser = async (req, res) => {
    const {id} = req.params


    try {
        const userGet = await User.findByIdAndUpdate(
            {_id: id},
            req.body,
            {
                new: true,
                runValidators: true,
            }
        )
        if (!userGet){
            return res.status(404).json(`No such user ${id}`)
        }
        res.status(200).json(userGet)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {createUser, getUser, getOneUser, deleteUser, updateUser}