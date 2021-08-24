//This page is being used to style/organize the information that is being rendered on Chats.js (all chats at /chat endpoint).

import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import "./Chat.css";

//TODO - This component will need GET requests to grab all of the chats you have with people whom you have matched with. This will include user name, photo, message, and the timestamp for the message.

function Chat({ name, message, profilePic, timestamp }) {
	return (
		<Link to={`/chat/${name}`}>
			<div className="chat">
				<Avatar className="chat__image" src={profilePic} />
				<div className="chat__details">
					<h2>{name}</h2>
					<p>{message}</p>
				</div>
				<p className="chat__timestamp">{timestamp}</p>
			</div>
		</Link>
	);
}

export default Chat;
