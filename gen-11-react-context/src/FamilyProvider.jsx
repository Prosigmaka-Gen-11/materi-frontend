import { createContext, useState } from "react";

export const FamilyContext = createContext()

export default function FamilyProvider (props) {
	const [marga, setMarga] = useState('Bambang')

	return <FamilyContext.Provider value={{
		'marga': marga,
		setMarga: setMarga
	}}>
		{props.children}
	</FamilyContext.Provider>
}