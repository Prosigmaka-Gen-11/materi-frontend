import { useState } from "react";
import Ayah from "./Ayah";
import Ibu from "./Ibu";

export default function App () {
	const [marga, setMarga] = useState('Nasution')

	return <>
		<h1>aku kakek!</h1>

		<button onClick={() => setMarga('Simanjuntak')}>
			Ubah Marga
		</button>

		<hr />

		<Ayah marga={marga} />

		<hr />

		<Ibu marga={marga} />
	</>
}