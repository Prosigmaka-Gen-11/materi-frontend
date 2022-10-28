export default function BookForm () {
	return <>
		<h1>Book Form</h1>

		<form>
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