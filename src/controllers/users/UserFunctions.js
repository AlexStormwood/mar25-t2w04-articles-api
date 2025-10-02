const { UserModel } = require("../../database/entities/User");


// Register user 
async function registerUser(username, password){

}

// Login a user (make a JWT for the user)
async function loginUser(targetUser){

}

// Get all users from DB 
async function getAllUsers(){

}

// Get one user by ID 
async function getOneUserById(targetUserId){

}

// Update one user 
async function updateOneUser(targetUserId, newData){
	let updateResult = await UserModel.findByIdAndUpdate(targetUserId, newData, {new: true});
	return updateResult;
}

// Delete one user 
async function deleteOneUserById(targetUserId){

}


module.exports = {
	registerUser, loginUser,
	getAllUsers, getOneUserById,
	updateOneUser, deleteOneUserById
}