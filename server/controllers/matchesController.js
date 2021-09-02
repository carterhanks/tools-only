module.exports = {
	//Give a matched ID when they're matched?
	matched: async (req, res) => {
		const db = req.app.get("db");
		const { matched_id, liked_id, liker_id } = req.body;

		const [checkMatched] = await db.matches.matched(
			matched_id,
			liked_id,
			liker_id
		);
		req.session.matched = checkMatched;
		console.log(checkMatched);

		if (checkMatched) {
			return res.status(200).send(req.session.matched);
		} else {
			return res.status(400).send("Users Not Matched");
		}
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
