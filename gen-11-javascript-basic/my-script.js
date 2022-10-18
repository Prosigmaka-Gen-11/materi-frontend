// learn variable ==========================
const contohConst = 1 + 1; // declare
let hasil = 1 + 1  // assign
hasil = 'bambang'

let x = 1;
let y = 2;
let res = x + y;

// learn output ==========================
document.querySelector('#target').innerHTML = hasil
document.write(hasil)
window.alert(hasil)
alert(res)
console.log(hasil)

// learn function ==========================
function greeting (nama, marga) { // buat function
	return 'Hai ' + nama + ' ' + marga
}

const greet = greeting('James', 'Uchiha')
console.log(greet)

// learn method ==========================
let stringsaya = 'Hai Bambang'
console.log(stringsaya.substring(4, 11))

// learn object ==========================
const orang = {
	nama: 'Abid',
	umur: 17,
	pendidikan: {
		sd: 'SDN 181',
		smp: 'SMP 232'
	},
	sebutNamaSaya: function () {
		console.log('Saya Abid')
	}
}

orang.pendidikan.smp = 'MTs Al Bambang'

console.log(orang.pendidikan.smp)

document.querySelector('.kedua').innerHTML = 'Hai James'

// learn array ==========================
const contohArray = [
	'abid', // 0
	'ahmad', // 1
	'bambang' // 2
] // iterable

contohArray[1] = 'Ramius'

console.log(contohArray[1])

// learn for ==========================
for (let hasil of contohArray) {
	console.log(hasil)
}

for (let index in contohArray) {
	console.log(contohArray[index])
}

contohArray.forEach(function (hasil, index) {
	console.log(hasil + index)
})

// learn if ==========================
// 0 -> false
// null -> false
// undefined -> false
if (0) {
	console.log('iya sama')
} else if ('bambang') {
	console.log('ho oh')
} else {
	console.log('nggak sama')
}