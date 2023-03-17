import React, { useState, useEffect } from "react";
import { Header } from "./header";
import { InputField } from "./inputField";
import { MessageHistory } from "./messageHistory";

import s from "../styles/chatOpen.module.css";
import axios from "axios";
import { useAppSelector } from "../../redux/hooks/hooks";
import { IMessage } from "../../interface/message";

export const ChatOpen = () => {
	const { current } = useAppSelector((state) => state.chat);

	const initial:IMessage[] = [{}]
	const [messages, setMessages] = useState(initial);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		axios
			.get(
				`https://api.lenzaos.com/test/message.get?chat_id=${current.id}`
			)
			.then((res) => {
				setMessages(res.data.response);
				setLoading(false);
			})
			.catch((err) => {
				console.warn(err);
			});
	}, [current]);

	return !isLoading ? (
		<div className={s.chatOpen}>
			<Header {...current} />
			<MessageHistory {...messages} />
			<InputField />
		</div>
	) : null;
};
