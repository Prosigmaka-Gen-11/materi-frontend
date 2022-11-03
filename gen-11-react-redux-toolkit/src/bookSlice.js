import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	title: 'Menggapai Senja',
	type: 'Novel',
	author: 'Bambang D. Ferdinand'
}

export const bookSlice = createSlice({
	name: 'book',
	initialState,
	reducers: {
		ubahJudul (state) {
			state.title = 'Menggapai Pagi'
		}
	}
})

export const { ubahJudul } = bookSlice.actions

export default bookSlice.reducer