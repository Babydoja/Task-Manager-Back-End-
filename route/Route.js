const express = require("express");
const { createUser, getUser, getOneUser, deleteUser, updateUser } = require("../controller/Controller");
const User = require("../model/Model");
const router = express.Router();

router.post('/create_user', createUser);
router.get('/create_user', getUser);
router.get('/create_user/:id', getOneUser);
router.delete('/create_user/:id', deleteUser);
router.patch('/create_user/:id', updateUser);
module.exports = router;

