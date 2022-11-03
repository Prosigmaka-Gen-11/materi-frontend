import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import bookReducer from "./bookSlice";

const reducers = combineReducers({
	book: bookReducer
})

const persistConfig = {
	key: 'root',
	storage
}
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
	reducer: persistedReducer,
})

export const persistedStore = persistStore(store)