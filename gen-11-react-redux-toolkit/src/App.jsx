import { useSelector, useDispatch } from "react-redux"
import { ubahJudul } from "./bookSlice"

export default function App () {
  const bookSlice = useSelector(state => state.book)
  const dispatch = useDispatch()

  console.log(bookSlice)

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
  </>
}