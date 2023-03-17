import React from "react";
import { Avatar } from "../../Avatar";
import s from "../../styles/chatList.module.css";
import { Chat } from "../../../redux/models/chat";
import { IAvatar } from "../../Avatar/interface";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { setCurrent } from "../../../redux/slices/chatSlice";
import { Current } from "../../../interface/chat";

export const ChatItem = (item: Chat) => {
	const dispatch = useAppDispatch();
	const { current } = useAppSelector((state) => state.chat);

	const src = item.avatar;
	const id = item.id;
	const title = item.title;
	const size = "md";
	const props: IAvatar = { src, size };
	const curr: Current = { id, title };

	const update = () => {
		dispatch(setCurrent(curr));
	};

	return (current.id === id) ? (
		<div className={s.currentChatItem} onClick={update}>
			<Avatar {...props} />
			<div className={s.textBlock}>
				<div className={s.itemTitle}>{item.title}</div>
				<div className={s.itemText}>{item.last_message.message}</div>
			</div>
		</div>
	) : (
		<div className={s.chatItem} onClick={update}>
			<Avatar {...props} />
			<div className={s.textBlock}>
				<div className={s.itemTitle}>{item.title}</div>
				<div className={s.itemText}>{item.last_message.message}</div>
			</div>
		</div>
	);
};
