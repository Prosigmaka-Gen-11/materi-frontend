import { createContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthProvider ({ children }) {
	const [userData, setUserData] = useState({})
	const [token, setToken] = useState(null)

	const isLogin = token != null

	return <AuthContext.Provider value={{
		isLogin,
		userData,
		token,
		setUserData,
		setToken,
	 }}>
		{children}
	</AuthContext.Provider>
}