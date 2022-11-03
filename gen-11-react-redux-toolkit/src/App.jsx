import { useSelector, useDispatch } from "react-redux"
import { ubahJudul, ubahSemua, ubahTipe, reset } from "./bookSlice"

export default function App () {
  const bookSlice = useSelector(state => state.book)
  const dispatch = useDispatch()

  const handleUbahTipe = () => {
    dispatch(ubahTipe({
      tipeBuku: 'Biografi',
      penulis: 'Bambang Suyatno'
    }))
    dispatch(ubahJudul())
  }

  return <>
    <h1>My Book</h1>

    <ul>
      <li>Title: {bookSlice.title}</li>
      <li>Type: {bookSlice.type}</li>
      <li>Author: {bookSlice.author}</li>
    </ul>

    <button onClick={() => dispatch(ubahJudul())}>
      Ubah Judul
    </button>

    <button onClick={() => dispatch(ubahTipe('Light Novel'))}>
      Ubah Tipe
    </button>

    <button onClick={handleUbahTipe}>
      Ubah Tipe 2
    </button>

    <button onClick={() => dispatch(ubahSemua({
      title: 'Menggapai Hari',
      type: 'Pelajaran Hidup',
      author: 'Moese'
    }))}>
      Ubah Semua
    </button>

    <button onClick={() => dispatch(reset())}>
      reset state
    </button>
  </>
}