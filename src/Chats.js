//This page simply holds/renders the chat info that is showing on the "/chat" endpoint.

import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
	return (
		<div className="chats">
			<Chat
				name="Carter Hanks"
				message="Yo what's up?"
				timestamp="40 seconds ago"
				profilePic="https://pbs.twimg.com/profile_images/478809691364261888/1z8z0oix.jpeg"
			/>
			<Chat
				name="Mia Toretto"
				message="We've been trying to reach you about your vehicle's extended warranty."
				timestamp="1 Day Ago"
				profilePic="https://media.vanityfair.com/photos/5d177da6734e1f0008f96136/master/pass/fast-9-jordana-brewster.jpg"
			/>
		</div>
	);
}

export default Chats;
