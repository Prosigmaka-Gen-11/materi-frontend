import { useState } from "react"

export default function FormHandlingEfficient () {
	const [formInput, setFormInput] = useState({
		title: 'ahmad',
		author: '',
		category: '',
		publish_date: '',
		content: 'hai bambang'
	})

	function handleFormInput (evt, propName) {
		setFormInput({ ...formInput, [propName]: evt.target.value })
	}

	function handleFormInputBasic (evt, propName) {
		const copyFormInput = { ...formInput }
		copyFormInput[propName] = evt.target.value
		setFormInput(copyFormInput)
	}

	return <>
		<p>title: {formInput.title}</p>
		<p>author: {formInput.author}</p>
		<p>category: {formInput.category}</p>
		<p>publish_date: {formInput.publish_date}</p>
		<p>content: {formInput.content}</p>

		<hr />

		<label>
			Title <br />
			<input type="text" value={formInput.title} onChange={evt => handleFormInput(evt, 'title')} />
		</label>
		<br /><br />

		<label>
			Author <br />
			<input type="text" value={formInput.author} onChange={evt => handleFormInput(evt, 'author')} />
		</label>
		<br /><br />

		<label>
			Category <br />
			<select value={formInput.category} onChange={evt => handleFormInput(evt, 'category')}>
				<option value="agama">Agama</option>
				<option value="politik">Politik</option>
				<option value="kebudayaan">Kebudayaan</option>
			</select>
		</label>
		<br /><br />

		<label>
			Publish Date <br />
			<input type="date" value={formInput.publish_date} onChange={evt => handleFormInput(evt, 'publish_date')} />
		</label>
		<br /><br />

		<label>
			Content <br />
			<textarea value={formInput.content} onChange={evt => handleFormInput(evt, 'content')}></textarea>
		</label>
		<br /><br />

		<button>
			submit
		</button>
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