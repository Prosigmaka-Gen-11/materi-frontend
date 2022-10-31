import { useNavigate } from "react-router-dom"

export default function BookForm () {
	const navigate = useNavigate()

	function handleSubmit (evt) {
		evt.preventDefault()

		// fungsi axios segala macem

		navigate("/book/list")
	}

	return <>
		<h1>Book Form</h1>

		<form onSubmit={handleSubmit}>
			<label>
				Title: <br />
				<input type="text" />
			</label>
			<br /><br />
			<label>
				Author: <br />
				<input type="text" />
			</label>
			<br /><br />
			<button>submit</button>
		</form>
	</>
}