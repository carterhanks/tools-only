import React from "react";
import "./SwipeButtons.css";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
	return (
		<div className="swipeButtons">
			<IconButton className="swipeButtons__x">
				<HighlightOffIcon fontSize="large" />
			</IconButton>
			<IconButton className="swipeButtons__heart">
				<FavoriteBorderIcon fontSize="large" />
			</IconButton>
		</div>
	);
}

export default SwipeButtons;
