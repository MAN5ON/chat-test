import React from "react";
import { Avatar } from "../../../Avatar";
import s from "../../../styles/chatOpen.module.css";
import { IMessage } from '../../../../interface/message';
import { IAvatar } from '../../../Avatar/interface';
import dayjs from "dayjs";

export const MessageItem = (value:IMessage) => {

	console.log(value)
	const src = value.user?.avatar
	const size = "sm"
	const props: IAvatar = { src, size };
	return (
		<div className={s.messageItem}>
			<Avatar  {...props} />
			<div className={s.message}>
				<div className={s.username}>{value.user?.name} {value.user?.surname}</div>
				<div className={s.messageBody}>
					<div className={s.messageText}>{value.message}</div>
					<div className={s.timeCheck}>{dayjs(value.created_at).format("hh:mm")}</div>
				</div>
			</div>
		</div>
	);
};
