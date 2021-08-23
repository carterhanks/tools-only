import React from "react";
import Header from "./Header";
import ToolCards from "./ToolCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/chat/:person">
						<Header backButton="/chat" />
						<ChatScreen />
					</Route>
					<Route path="/chat">
						<Header backButton="/" />
						<Chats />
					</Route>
					<Route path="/">
						{/* Default route/webpage always goes at the bottom - renders last so that it doesn't stop other routes from rendering/being accessable - might be fixed as of more recent patch */}
						<Header />
						<ToolCards />
						<SwipeButtons />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;

{
	/* Header */
}
{
	/* Tinder Cards */
}
{
	/* Buttons Below Tinder Cards */
}

{
	/* Chats Screen */
}
{
	/* Individual Chat Screens */
}
{
	/* Footer */
}
