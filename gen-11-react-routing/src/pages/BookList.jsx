export default function BookList () {
	return <>
		<h1>Book List</h1>
		<table>
			<tr>
				<th>Title</th>
				<th>Author</th>
				<th>Action</th>
			</tr>
			<tr>
				<td>Menggapai Senja</td>
				<td>Bambang</td>
				<td>
					<button>Edit</button>
					<button>Hapus</button>
				</td>
			</tr>
			<tr>
				<td>Biografi Adolf Hitler</td>
				<td>Bambang</td>
				<td>
					<button>Edit</button>
					<button>Hapus</button>
				</td>
			</tr>
			<tr>
				<td>Mein Kampf</td>
				<td>Bambang</td>
				<td>
					<button>Edit</button>
					<button>Hapus</button>
				</td>
			</tr>
		</table>
	</>
}