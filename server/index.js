//This is where the server will be set up including get/post/put/delete requests
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const authController = require("./controllers/authController");
const matchesController = require("./controllers/matchesController");
const messagesController = require("./controllers/messagesController");
const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env;

const app = express();

//Middleware
app.use(express.json());
app.use(
	session({
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 1000 * 60 * 60 * 24 },
		secret: SESSION_SECRET
	})
);

//AUTH ENDPOINTS - deals with users table

//Handle POST request for registering new user
app.post("/auth/register", authController.register);

//Handle POST request for login
app.post("/auth/login", authController.signIn);

//Handle DELETE request for when users logout
app.delete("/auth/logout", authController.signOut);

//TODO(future) - handle PUT request for when users update their profile information

//TODO(is this needed?) - handle GET request with profile information (userid, name, bio, profile image, location) for /profile endpoint
// app.get("/auth/user/:user_id", authController.getAllUsers);

//MATCHES ENPOINTS
//*For adding a match ID, we need to ask if one already exists

//TODO - Handle POST request for when two users match
app.post("/matches/matched", matchesController.matched); //liked_id and liker_id match

// //TODO - Handle GET request for any potential matches
// app.get("/matches/potentials", matchesController.potentials);

//TODO - handle POST request for when I and others swipe right/click heart on ToolCards
app.post("/matches/:user_id", matchesController.liked_id);
app.get("/matches/liker_id", matchesController.liker_id);

//TODO - handle DELETE request for when I or others swipe left/click X on ToolCards
app.delete("/matches/not_liked", matchesController.notLiked);

//MESSAGES ENPOINTS (future?)
//TODO - handle GET request for name, photo, and message on chatscreen (individual match)
//TODO - handle POST request to send your new message to individual match on chatscreen
//TODO - handle GET request for name, photo, and message on Chat (all matches at /chat endpoint)

massive({
	connectionString: CONNECTION_STRING,
	ssl: {
		rejectUnauthorized: false
	}
}).then((dbInstance) => app.set("db", dbInstance));

app.listen(SERVER_PORT, () => {
	console.log(`Server Slappin on port ${SERVER_PORT}!`);
});
