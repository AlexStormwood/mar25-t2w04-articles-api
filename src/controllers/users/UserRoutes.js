const express = require("express");
const { updateOneUser } = require("./UserFunctions");
const { verifyBasicUserAuth, createJwt, verifyJwt } = require("../../middleware/AuthenticationMiddleware");
const router = express.Router();

/*
User router endpoints: 

POST register 
POST login
GET all 
GET one 
CREATE one
UPDATE one
DELETE one 

*/


router.post("/login", verifyBasicUserAuth, createJwt, async (request, response) => {

	// let userSessionJwt = request.authentication.jwt;
	response.json({
		message:"Not yet implemented!"
	});
});

router.post("/register", async (request, response) => {
// router.post("/register", verifyNewUserData, createNewUser, createJwt, async (request, response) => {)

	response.json({
		message:"Not yet implemented!"
	});
});

router.get("/all", verifyJwt, async (request, response) => {

	response.json({
		message:"Not yet implemented!"
	});
});

router.get("/one", verifyJwt, async (request, response) => {

	response.json({
		message:"Not yet implemented!"
	});
});

router.post("/one", verifyJwt, async (request, response) => {

	response.json({
		message:"Not yet implemented!"
	});
});

router.patch("/one/:targetUserId", verifyJwt, async (request, response) => {
	//								user id from params,		 new data from request.body as JSON 
	let result = await updateOneUser(request.params.targetUserId, request.body);

	// let result = await updateOneUser(request.body.targetUserId, request.body.newData);
	// let result = await updateOneUser(request.body.query, request.body.newData);

	response.json({
		result: result
	});
});

router.delete("/one/:targetUserId", verifyJwt, async (request, response) => {
// router.delete("/one/:targetUserId", verifyJwt, verifyUserIsAdmin, async (request, response) => {

	response.json({
		message:"Not yet implemented!"
	});
});

module.exports = router;