import { useContext } from "react"
import { FamilyContext } from "./FamilyProvider"

export default function Anak(props) {
	const ContextDariKakek = useContext(FamilyContext)

	return <>
		<h3>aku anak!</h3>
		<p>margaku: {ContextDariKakek.marga}</p>
	</>
}