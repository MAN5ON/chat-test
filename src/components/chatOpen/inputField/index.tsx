import React from "react";
import clip from "../../../resources/icons/Clip.svg";
import send from "../../../resources/icons/Send.svg";
import s from "../../styles/chatOpen.module.css";

export const InputField = () => {
	return (
		<form className={s.inputForm}>
			<textarea placeholder="Type message" />

			<div className={s.inputButtons}>
				<button className={s.addFile} type="button">
					<img src={clip} alt="add file" />
				</button>
				<button className={s.send} type="button">
					<img src={send} alt="send message" />
				</button>
			</div>
		</form>
	);
};
