const express = require("express");
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

router.patch("/one", async (request, response) => {

	response.json({
		message:"Not yet implemented!"
	});
});

router.delete("/one", async (request, response) => {

	response.json({
		message:"Not yet implemented!"
	});
});

module.exports = router;