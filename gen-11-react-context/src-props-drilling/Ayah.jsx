import Anak from "./Anak";

export default function Ayah(props) {
	return <>
		<h1>aku ayah!</h1>
		<p>marga ayah: {props.marga}</p>
		<Anak marga={props.marga} />
	</>
}