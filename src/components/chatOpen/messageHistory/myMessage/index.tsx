import React from "react";
import s from "../../../styles/chatOpen.module.css";
import { Time } from "./time";
import { IMessage } from '../../../../interface/message';

export const MyMessageItem = (value: IMessage) => {
	return (
		<div className={s.myMessageItem}>
			<div className={s.messageBody}>
				<div className={s.messageText}>
					{value.message}
				</div>
				<Time {...value}/>
			</div>
		</div>
	);
};
