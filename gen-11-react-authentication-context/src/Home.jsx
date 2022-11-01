import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export default function Home () {
	const { userData, token } = useContext(AuthContext)

	return <>
		<h1>ini Home</h1>
		<h3>Hi, {userData.firstName}</h3>
		<p>token anda: {token}</p>
		<Link to="/about">ke about</Link>
		<br />
		<br />
		<button>
			logout
		</button>
	</>
}