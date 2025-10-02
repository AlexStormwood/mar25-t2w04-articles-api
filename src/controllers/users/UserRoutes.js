const express = require("express");
const { updateOneUser } = require("./UserFunctions");
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


router.post("/login", async (request, response) => {

	response.json({
		message:"Not yet implemented!"
	});
});

router.post("/register", async (request, response) => {

	response.json({
		message:"Not yet implemented!"
	});
});

router.get("/all", async (request, response) => {

	response.json({
		message:"Not yet implemented!"
	});
});

router.get("/one", async (request, response) => {

	response.json({
		message:"Not yet implemented!"
	});
});

router.post("/one", async (request, response) => {

	response.json({
		message:"Not yet implemented!"
	});
});

router.patch("/one/:targetUserId", async (request, response) => {
	//								user id from params,		 new data from request.body as JSON 
	let result = await updateOneUser(request.params.targetUserId, request.body);

	// let result = await updateOneUser(request.body.targetUserId, request.body.newData);
	// let result = await updateOneUser(request.body.query, request.body.newData);

	response.json({
		result: result
	});
});

router.delete("/one/:targetUserId", async (request, response) => {

	response.json({
		message:"Not yet implemented!"
	});
});

module.exports = router;