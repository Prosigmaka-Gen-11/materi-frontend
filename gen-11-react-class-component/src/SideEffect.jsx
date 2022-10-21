import React, { useEffect, useState } from 'react' // hook

export default function SideEffect () {
	const [toko, setToko] = useState('')
	const [kemeja, setKemeja] = useState('')
	const [celana, setCelana] = useState('')
	const [rangkuman, setRangkuman] = useState('')

	useEffect(() => {
		console.log('efek samping setiap update')

		return () => {
			console.log('sebelum efek samping selanjutnya jalan')
		}
	})

	useEffect(() => {
		console.log('efek samping untuk render pertama kali')

		const dataFromDb = {
			toko: 'Shopee',
			kemeja: 'Woodcutter',
			celana: 'United Jeans'
		}

		setToko(dataFromDb.toko)
		setKemeja(dataFromDb.kemeja)
		setCelana(dataFromDb.celana)

		return () => {
			console.log('sebelum component hilang')

			setToko('')
			setKemeja('')
			setCelana('')
		}
	}, [])

	useEffect(() => {
		console.log('efek samping ketika toko dan celana berubah')

		setRangkuman(`Saya punya kemeja ${kemeja} dan celana ${celana}, belinya di ${toko}`)

		return () => {
			console.log('sebelum toko dan celana hilang')
		}
	}, [toko, celana, kemeja])

	return <>
		<h1>Aku Side Effect</h1>
		<button onClick={() => setToko('Tokopedia')}>
			{toko}
		</button>
		<button onClick={() => setKemeja('uniqlo')}>
			{kemeja}
		</button>
		<button onClick={() => setCelana('Gutten')}>
			{celana}
		</button>
		<p>{rangkuman}</p>
	</>
}