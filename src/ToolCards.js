import React, { useState, useEffect } from "react";
import database from "./firebase";
import TinderCard from "react-tinder-card";
import "./ToolCards.css";

//TODO - ToolCards need to have functionality on swipe. Swipe left and it deletes user from potential matches, swipe right and it posts it to a "likes" array. Buttons also need to mimic that functionality.

function ToolCards() {
	const [people, setPeople] = useState([]); // This is your component's State and is the same as "const people = [];"

	//Piece of code which runs based on a condition
	useEffect(() => {
		// This is where the code runs

		const unsubscribe = database
			.collection("people")
			.onSnapshot((snapshot) =>
				setPeople(snapshot.docs.map((doc) => doc.data()))
			); // Gets access to that entire collection on firebase database, and anytime it changes, take a 'picture' of it, sent me the new data, and set it inside of the people array.

		return () => {
			// This is the cleanup
			unsubscribe();
		};
	}, []); // This will run only one time ever when component loads if [] is left blank, if you want it to change every time 'people' changes you would put 'people' into the [] brackets - if you wanted another variable (say, messages or header) you would put that variable into the [] brackets. Only problem with this is that the database refresh adds up each time it's refreshed and will eventually slow down your app. You solve this by adding the variable of people into the [] at the end, and creating a cleanup (commented above).

	//BAD
	//  const people = [];
	//  people.push('carter', 'tucker');

	//GOOD (Push to an array in React)
	//  setPeople([...people, 'carter', 'tucker']);

	return (
		<div>
			<div className="toolCards__cardContainer">
				{people.map((person) => (
					<TinderCard className="swipe" key={person.name}>
						<div
							style={{ backgroundImage: `url(${person.url})` }}
							className="card"
							preventSwipe={["up", "down"]}
						>
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	);
}

export default ToolCards;
