import { ChatItem } from "./chatItem";
import s from "../styles/chatList.module.css";
import { Chat } from "../../redux/models/chat";
import { ChatState } from '../../interface/chat';

export const ChatList = (chats: ChatState) => {

	return (
		<div className={s.chatList}>
			<div className={s.header}>All chats</div>
			{ chats.loading ? (
				null
			): (
				chats.data && 
				chats.data.map((item)=> (
					<ChatItem {...item} />
				))
			)}
		</div>
	);
};
