module.exports = {
	//Sign In
	signIn: async (req, res) => {
		const db = req.app.get("db");
		const { userName, password } = req.body;
		const user = await db.check_user_for_login(userName);

		if (!user[0]) {
			return res.status(400).send("User Does Not Exist");
		} else {
			return res.status(200).send(req.session.user);
		}
	}
	//TODO - Sign Out
	//TODO - User already exists
};
