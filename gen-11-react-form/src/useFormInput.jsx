import { useState } from "react"

// DRY
export default function useFormInput (inputData) {
	const [formInput, setFormInput] = useState(inputData)

	function handleFormInput(evt, propName) {
		setFormInput({ ...formInput, [propName]: evt.target.value })
	}

	return {
		formInput,
		handleFormInput
	}
}