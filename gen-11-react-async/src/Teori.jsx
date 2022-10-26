function Teori() {

	const janjiJiwa = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (1 + 1 === 2) {
				resolve('proses berhasil')
			} else {
				reject('terjadi kesalahan')
			}
		}, 2000)
	})

	async function pakaiAsync() {
		try {
			console.log('aku diatas')

			const hasilJanji = await janjiJiwa
			console.log(hasilJanji)

			console.log('aku dibawah')
		} catch (err) {
			console.log(err)
		}
	}

	pakaiAsync()



	return <>
		<h1>Hi Mom</h1>
	</>
}

export default App

/*
console.log('aku pertama')

  setTimeout(() => {
	console.log('aku kedua')
  }, 1000)

  console.log('aku terakhir')
*/
