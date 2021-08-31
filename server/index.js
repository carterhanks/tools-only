//This is where the server will be set up including get/post/put/delete requests
const express = require("express");
const massive = require("massive");
const authController = require("./authController");
require("dotenv").config();

const app = express();

//TODO - handle GET request for name, photo, and message on chatscreen (individual match)

//TODO - handle POST request to send your new message to individual match on chatscreen

//TODO - handle GET request for name, photo, and message on Chat (all matches at /chat endpoint)

//TODO - handle GET request with profile information (userid, name, bio, profile image, location) for /profile endpoint

//TODO - handle PUT request for when users update their profile information

//TODO - handle POST request for when you swipe right/click heart on ToolCards

//TODO - handle DELETE request for when you swipe left/click X on ToolCards

//Auth endpoints - deals with users table

//Matches endpoints
//*For adding a match ID, we need to ask if one already exists

//Messages endpoints

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.post("/auth/login", authController.signIn);

massive({
	connectionString: CONNECTION_STRING,
	ssl: {
		rejectUnauthorized: false
	}
}).then((dbInstance) => app.set("db", dbInstance));

app.use(express.json());

app.listen(SERVER_PORT, () => {
	console.log(`Server Slappin' on port ${SERVER_PORT}!`);
});
