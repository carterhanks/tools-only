import React from "react";
import "./Header.css";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { IconButton } from "@material-ui/core";

function Header() {
	return (
		//BEM
		<div className="header">
			<IconButton>
				<PersonOutlineIcon className="header__icon" fontSize="large" />
			</IconButton>
			<img
				className="header__logo"
				src="/tools-only.png"
				alt="Tools Only Logo"
			></img>
			<IconButton>
				<ChatBubbleOutlineIcon className="header__icon" fontSize="large" />
			</IconButton>
		</div>
	);
}

export default Header;
