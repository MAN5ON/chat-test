import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Chat } from "../models/chat";
import axios from "axios";
import { ChatState, Current } from "../../interface/chat";

export const fetchChat = createAsyncThunk("chat/fetchChat", async () => {
	try {
		const response = await axios.get<Chat[]>(
			"https://api.lenzaos.com/test/chat.get?offset=0&limit=20"
		);
		return response.data;
	} catch (error: any) {
		return console.log(error.message);
	}
});

const initialState = {
	loading: false,
	error: null,
	data: null,
	current: { id: "", title: "" },
} as ChatState;

const chatSlice = createSlice({
	name: "chat",
	initialState,
	reducers: {
		setCurrent: (state, action: PayloadAction<Current>) => {
			state.current = action.payload;
			console.log(state.current);
			
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchChat.pending, (state) => {
				state.loading = true;
			})
			.addCase(
				fetchChat.fulfilled,
				(state, action: PayloadAction<any>) => {
					state.loading = false;
					state.data = action.payload.response;
				}
			)
			.addCase(
				fetchChat.rejected,
				(state, action: PayloadAction<any>) => {
					state.error = action.payload;
				}
			);
	},
});

export const { setCurrent } = chatSlice.actions;
export const chatReducer = chatSlice.reducer;
