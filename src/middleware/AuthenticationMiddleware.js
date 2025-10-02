

async function verifyBasicUserAuth( request, response, next ){
	// Used for users logging in or signing up with plain username & password 
	// Find a user based on provided username & password
	// Attach that user to the request object for other middleware or route callbacks to use 

	next();
}

async function createJwt(request, response, next){
	// Based on a user found on the request object,
	// Make a JWT to log in that user,
	// and attach that JWT to the request object for other middleware or route callbacks to use

	next();
}

async function verifyJwt(request, response, next) {
	// Used for users proving that they are currently logged in
	// Verify a provided JWT and create a new JWT to attach to the request object.

	next();
}

module.exports = {
	verifyBasicUserAuth, createJwt, verifyJwt
}