module.exports = {
	//Register
	register: async (req, res) => {
		const db = req.app.get("db");
		const { email, password, name, bio, profile_photo_url, location } =
			req.body;

		const [checkUser] = await db.signIn.check_user_exists(email);

		if (checkUser) {
			return res.status(400).send("User Already Exists");
		}

		const [addUser] = await db.register.add_user(
			email,
			password,
			name,
			bio,
			profile_photo_url,
			location
		);

		if (addUser) {
			req.session.user = addUser;
			return res.status(200).send(req.session.user);
		} else {
			return res.status(400).send("Registration Failed");
		}
	},

	//Sign In
	signIn: async (req, res) => {
		const db = req.app.get("db");
		const { email, password } = req.body;

		const [checkUser] = await db.signIn.check_user_exists(email); //check if user exists
		const [checkPass] = await db.signIn.check_user_for_password(password);
		const [checkBoth] = await db.signIn.check_user_for_both(email, password);

		// I want to make if statements to handle our authentication
		if ((checkUser, checkPass, checkBoth)) {
			req.session.user = checkBoth;
			console.log(req.session.user);
			return res.status(200).send(req.session.user);
		} else {
			return res.status(400).send("Email or Password Incorrect");
		}
	},
	//Sign Out
	signOut: async (req, res) => {
		req.session.destroy();
		res.status(200).send("OK");
	}
};
