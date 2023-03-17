import React, { FC, useEffect } from "react";
import { fetchChat } from "../../redux/slices/chatSlice";
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { IPage } from "../../interface/page";
import { ChatList } from "../../components/chatList";
import { ChatOpen } from "../../components/chatOpen";
import s from "../../components/styles/index.module.css";

export const PageIndex: FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
	  dispatch(fetchChat());
	}, [dispatch]);

		

	const chats = useAppSelector((state) => state.chat)
	return (
		<div className={s.appWrapper}>
			<ChatList {...chats}/>
			<ChatOpen/>
		</div>
	);
};
