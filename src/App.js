import React from "react";
import Header from "./Header";
import ToolCards from "./ToolCards";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/chat">
						<Header backButton="/" />
						<h1>I am the chat page</h1>
					</Route>
					<Route path="/">
						<Header /> {/* Default always goes at the bottom - renders last */}
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
