import React from "react";
import s from "../../styles/chatOpen.module.css";
// import { SystemMessage } from "./systemMessage";
// import { NewMessage } from "./newMessage";
import { MessageItem } from "./messageItem";
import { MyMessageItem } from "./myMessage";
import { IMessage } from "../../../interface/message";

export const MessageHistory = (messages: IMessage[]) => {
	return (
		<div className={s.messageHistory}>
			{
				Object.values(messages).reverse().map((value) => 
				(value.user?.you) ? <MyMessageItem {...value} /> : <MessageItem {...value} />
				)
			}
		</div>
	);
};
