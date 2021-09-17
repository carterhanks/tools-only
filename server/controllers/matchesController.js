module.exports = {
	//Give a matched ID when they're matched?
	matched: async (req, res) => {
		const db = req.app.get("db");
		const { decision, user_id } = req.body;

		//TODO - make a query using user_id, value returned will be

		//TODO - check if anything inside of user_one_id matches with my user_id

		//TODO - check if anything inside of user_two_id matches with my user_id

		// Check If our ID exists in either of the above rows - if it is then we need to update the value with the corrosponding row (ie user_one_decision / user_two_decision)

		//! Realizing this has to be a put request

		// We need a POST request prior to this PUT request because put is editing and post is creating it.

		//* Possible Solution 1 - Every time someone either registers / logs in / runs out of users, you make a specific number of POST requests (batch) and then you get 15 new photos/users that you can swipe through.

		//* Possible Solution 2 - When someone registers we handle a POST request that creates a new table for every single user that exists.

		// TODO - if statement - if both of the boolean values for user1 and user2 are true then create messages ID (match)
	},

	populatePeople: async (req, res) => {
		const db = req.app.get("db");
		const { user_id, match_counter } = req.body;

		//TODO - matchCounter query will grab the first 15 people from the database(users)

		//TODO - loop over the information (people), and for each person we will check if that person's ID and our ID (user_id) are on a 'matched' table (boolean)

		//TODO - if statement - if they are both on a matched table do nothing - if there isn't a table with both ID's then create a table with both ID's on it

		//TODO - return images and their ID from the user table for each individual image
	}
	// //Give a liked_id when I've liked and they become my potential?
	// liked_id: async (req, res) => {
	// 	const db = req.app.get("db");
	// 	const { liked, liked_id } = req.body;

	// 	const [liked] = await db.matches.liked(liked_id);

	// 	if (liked) {
	// 		return res.status(200).send(req.session.user);
	// 	} else {
	// 		return res.status(400).send("User not Liked");
	// 	}
	// },
	// //Give a liker_id when I've become liked by them and I become their potential?
	// liker_id: async (req, res) => {
	// 	const db = req.app.get("db");
	// 	const { liker, liker_id } = req.body;

	// 	const [liker] = await db.matches.liker(liker_id);

	// 	if (liker) {
	// 		return res.status(200).send(req.session.user);
	// 	} else {
	// 		return res.status(400).send("Liker Doesn't Like");
	// 	}
	// }
};
