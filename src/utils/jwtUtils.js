const jwt = require("jsonwebtoken");
const { UserModel } = require("../database/entities/User");

function generateJwt(targetUserInstance) {
	// Declare the object of custom data to store in the JWT
	let jwtTokenPayloadBody = {
		userId: targetUserInstance.id
	}

	if (!process.env.JWT_SECRET){
		throw new Error("JWTs need a secret key! Configure the server .env file correctly!");
	}

	let newJwt = jwt.sign(
		jwtTokenPayloadBody,
		process.env.JWT_SECRET,
		{expiresIn: "1d"}
	);
	// let newJwt = jwt.sign(jwtTokenPayloadBody, process.env.JWT_SECRET, {expiresIn: "1d"});

	return newJwt;
}

async function validateJwt(targetJwt){
	// Confirm that the token is legitimate
	if (!process.env.JWT_SECRET){
		throw new Error("JWT secret key needed in the server!");
	}
	let decodedValidJwt = jwt.verify(targetJwt, process.env.JWT_SECRET);
	console.log(JSON.stringify(decodedValidJwt, null, 4));

	// Search for the user mentioned in the token
	let tokenUser = await UserModel.findById(decodedValidJwt.userId);

	if (!tokenUser || tokenUser == null){
		throw new Error("User not found for the provided token. Please sign in again!");
	}

	return {
		decodedJwt: decodedValidJwt,
		tokenUser: tokenUser
	}
}


module.exports = {
	generateJwt, validateJwt
}