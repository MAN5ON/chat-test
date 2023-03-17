import React from "react";
import s from "../../styles/chatOpen.module.css";
import chat from "../../../resources/icons/Shape.svg";
import { Current } from '../../../interface/chat';

export const Header = (item:Current) => {
	return (
		<div className={s.header}>
			<img src={chat} alt="shape" />
			<span>{item.title}</span>
		</div>
	);
};
