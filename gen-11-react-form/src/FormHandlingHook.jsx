import { useState } from "react"
import useFormInput from "./useFormInput"

export default function FormHandlingHook () {
	const { formInput, handleFormInput } = useFormInput({
		name: '',
		age: ''
	})

	function handleSubmit (evt) {
		evt.preventDefault()
		console.log(formInput)
	}

	return <>
		<p>name: {formInput.name}</p>
		<p>age: {formInput.age}</p>
		<hr />

		<form onSubmit={evt => handleSubmit(evt)}>
			<label>
				Name <br />
				<input type="text" value={formInput.name} onChange={evt => handleFormInput(evt, 'name')} />
			</label>
			<br /><br />

			<label>
				Age <br />
				<input type="number" value={formInput.age} onChange={evt => handleFormInput(evt, 'age')} />
			</label>
			<br /><br />

			<button>
				submit
			</button>
		</form>
	</>
}

/*

// spread operator ...

	const fruits = [
		'banana',
		'papaya',
		'mango'
	]

	const newFruits = [
		'apple',
		'pinapple',
		...fruits // unwrap
	]

	const family = {
		dad: 'Heri',
		mom: 'Siti',
		brother: 'Suyatno'
	}

	const newFamily = {
		wife: 'Khadijah',
		son: 'James',
	}

	const bigFamily = {
		...family,
		...newFamily
	}

	const toBeCalled = 'son'

	bigFamily.wife = 'Ayu'
	bigFamily['wife'] = 'Mawar'
	bigFamily[toBeCalled] = 'Bambang'

	// console.log(bigFamily.wife)
	// console.log(bigFamily['wife'])
	// console.log(bigFamily[toBeCalled]) // bigFamily.son

	const toBeChanged = 'dad'

	const finalFamily = {
		...bigFamily,
		[toBeChanged]: 'Djoko'
	}

	console.log(bigFamily.dad)
	console.log(finalFamily.dad)

*/