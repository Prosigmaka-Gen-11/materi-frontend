import Anak from "./Anak";

export default function Ibu(props) {
	return <>
		<h1>aku ibu!</h1>
		<p>marga ibu: {props.marga}</p>
		<Anak marga={props.marga} />
	</>
}