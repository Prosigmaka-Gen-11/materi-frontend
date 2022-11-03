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
		},
		ubahTipe (state, action) {
			state.type = action.payload.tipeBuku
			state.author = action.payload.penulis
		},
		ubahSemua (state, action) {
			return action.payload
		}
	}
})

export const { ubahJudul, ubahTipe, ubahSemua } = bookSlice.actions

export default bookSlice.reducer