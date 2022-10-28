import { Link } from "react-router-dom"

export default function Home () {
	return <>
		<h1>Ini Home</h1>
		<Link to="/about">Ke About</Link>
	</>
}