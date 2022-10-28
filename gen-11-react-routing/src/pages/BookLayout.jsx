import { Outlet } from "react-router-dom"

export default function BookLayout () {
	return <>
		<h3>Popular Books</h3>
		<ul>
			<li>Menggapai Senja</li>
			<li>Biografi Adolf Hitler</li>
			<li>Mein Kampf</li>
		</ul>

		<br /><hr /><br />

		<Outlet />

		<br /><hr /><br />

		<h3>Popular Books</h3>
		<ul>
			<li>Menggapai Senja</li>
			<li>Biografi Adolf Hitler</li>
			<li>Mein Kampf</li>
		</ul>
	</>
}