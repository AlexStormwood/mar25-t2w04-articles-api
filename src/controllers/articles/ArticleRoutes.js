const express = require("express");
const router = express.Router();

/*
Article router endpoints: 

GET all 
GET one 
CREATE one
UPDATE one
DELETE one 

*/


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
	// This also needs the logic to create, update, or delete comments from the article!
	
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