import React from "react";
import "./Header.css";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
	const history = useHistory();
	return (
		//BEM
		<div className="header">
			{backButton ? (
				<IconButton onClick={() => history.replace(backButton)}>
					<ArrowBackIcon className="header__icon" fontSize="large" />
				</IconButton>
			) : (
				<Link to="/profile">
					<IconButton>
						<PersonOutlineIcon className="header__icon" fontSize="large" />
					</IconButton>
				</Link>
			)}
			<Link to="/">
				<img
					className="header__logo"
					src="/tools-only.png"
					alt="Tools Only Logo"
				></img>
			</Link>
			<Link to="/chat">
				<IconButton>
					<ChatBubbleOutlineIcon className="header__icon" fontSize="large" />
				</IconButton>
			</Link>
		</div>
	);
}

export default Header;
