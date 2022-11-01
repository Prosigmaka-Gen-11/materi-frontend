import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export default function Home () {
	const { userData, token, logout } = useContext(AuthContext)

	function handleLogout () {
		logout()
	}

	return <>
		<h1>ini Home</h1>
		<h3>Hi, {userData.firstName}</h3>
		<p>token anda: {token}</p>
		<Link to="/about">ke about</Link>
		<br />
		<br />
		<button onClick={handleLogout}>
			logout
		</button>
	</>
}