import { useContext } from "react";
import { FamilyContext } from "./FamilyProvider";
import Ayah from "./Ayah";
import Ibu from "./Ibu";


export default function App () {
	const ContextDariFamily = useContext(FamilyContext)

	return <>
		<h1>aku kakek!</h1>

		<button onClick={() => ContextDariFamily.setMarga('Simanjuntak')}>
			Ubah Marga
		</button>

		<hr />

		<Ayah />

		<hr />

		<Ibu />
	</>
}