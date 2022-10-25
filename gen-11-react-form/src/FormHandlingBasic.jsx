import { useState } from "react"

const genderList = [
	{ value: 'l', label: 'Laki-laki' },
	{ value: 'p', label: 'Perempuan' },
	{ value: 'n', label: 'Non biner' },
]

export default function FormHandlingBasic() {
	const [name, setName] = useState('')
	const [age, setAge] = useState('')
	const [prodi, setProdi] = useState('')
	const [gender, setGender] = useState('n')

	return <>
		<label>
			Nama Saya <br />
			<input
				type="text"
				value={name}
				onChange={(evt) => setName(evt.target.value)} />
			<br />
			{name}
		</label>

		<br /><br /><br />

		<label>
			Umur Saya <br />
			<input
				type="text"
				value={age}
				onChange={(evt) => setAge(evt.target.value)} />
			<br />
			{age}
		</label>

		<br /><br /><br />

		<label>
			Pilih Prodi: {prodi} <br />
			<select value={prodi} onChange={evt => setProdi(evt.target.value)}>
				<option value="" disabled>- pilih prodi -</option>
				<option value="teknik-informatika">Teknik Informatika</option>
				<option value="teknik-elektro">Teknik Elektro</option>
				<option value="fisika">Fisika</option>
			</select>
		</label>

		<br /><br /><br />

		{/* WET: write everything twice */}
		{/* DRY: dont repeat yourself */}
		<p>Gender: {gender}</p>
		{genderList.map((genderItem, index) =>
			<label key={genderItem.value}>
				<input
					type="radio"
					name="gender"
					value={genderItem.value}
					checked={gender === genderItem.value}
					onChange={e => setGender(e.target.value)} />
				{index}. {genderItem.label}
			</label>
		)}
	</>
}

// function SebutNama (nama, metodeNyebutNama) {
//   metodeNyebutNama(nama)
// }

// SebutNama('abid', function (event) {
//   alert(event)
// })