import { useContext } from "react";
import { FamilyContext } from "./FamilyProvider";
import Anak from "./Anak";

export default function Ayah() {
	const { marga, setMarga } = useContext(FamilyContext)

	return <>
		<h1>aku ayah!</h1>
		<button onClick={() => setMarga('Bakrie')}>
			Ubah Marga Dari Ayah
		</button>
		<p>marga ayah: {marga}</p>
		<Anak />
	</>
}