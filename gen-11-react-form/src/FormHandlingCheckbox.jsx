import { useState } from "react"

const fruits = ['banana', 'papaya', 'mango']

export default function FormHandlingCheckbox () {
	const [single, setSingle] = useState(false)
	const [multi, setMulti] = useState(['banana'])

	function handleSingleCheckbox (evt) {
		setSingle(evt.target.checked)
	}

	function handleMultiCheckbox (evt) {
		const { value, checked } = evt.target

		if (checked) {
			setMulti([...multi, value])
		} else {
			const newMulti = multi.filter(fruit => fruit !== value)
			setMulti(newMulti)
		}
	}

	/* function handleMultiCheckbox (evt) {
		const { value, checked } = evt.target

		const copyMulti = [...multi]
		if (checked) {
			copyMulti.push(value)
		} else {
			const index = copyMulti.indexOf(value)
			if (index !== -1) copyMulti.splice(index, 1)
		}
		setMulti(copyMulti)
	} */

	return <>
		<p>single: {single ? 'true' : 'false'}</p>
		<p>multi: {multi.join(', ')}</p>

		<br /><hr /><br />

		<label>
			<input type="checkbox" checked={single} onChange={handleSingleCheckbox}/>
			Single Checkbox
		</label>

		<br /><br /><br />

		Multi Checkbox <br />

		{fruits.map(fruit =>
			<label key={fruit}>
				<input
					type="checkbox"
					value={fruit}
					checked={multi.indexOf(fruit) !== -1}
					onChange={handleMultiCheckbox}
				/>
				{fruit}
				<br />
			</label>
		)}
	</>
}