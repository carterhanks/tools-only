import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([
		{
			name: "Mia",
			image:
				"https://media.vanityfair.com/photos/5d177da6734e1f0008f96136/master/pass/fast-9-jordana-brewster.jpg",
			message: "What is up?"
		},
		{
			name: "Mia",
			image:
				"https://media.vanityfair.com/photos/5d177da6734e1f0008f96136/master/pass/fast-9-jordana-brewster.jpg",
			message: "How is it going?"
		},
		{
			message: "Hi! How are you Mia?"
		}
	]);

	const handleSend = (e) => {
		e.preventDefault();

		setMessages([...messages, { message: input }]);
		setInput("");
	};

	return (
		<div className="chatScreen">
			<p className="chatScreen__timestamp">YOU MATCHED WITH MIA ON 10/08/20</p>
			{messages.map((message) =>
				message.name ? (
					<div className="chatScreen__message">
						<Avatar
							className="chatScreen__image"
							alt={message.name}
							src={message.image}
						/>
						<p className="chatScreen__text">{message.message}</p>
					</div>
				) : (
					<div className="chatScreen__message">
						<p className="chatScreen__textUser">{message.message}</p>
					</div>
				)
			)}

			<form className="chatScreen__input">
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className="chatScreen__inputField"
					type="text"
					placeholder="Type a message..."
				/>
				<button onClick={handleSend} className="chatScreen__inputButton">
					SEND
				</button>
			</form>
		</div>
	);
}

export default ChatScreen;
