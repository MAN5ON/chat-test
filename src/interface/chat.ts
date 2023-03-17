import { Chat } from "../redux/models/chat";

export interface ChatState {
	loading: boolean;
	error: string | null;
	data: Chat[] | null;
	current: Current;
}

export interface Current {
	id: string
	title: string;
}
