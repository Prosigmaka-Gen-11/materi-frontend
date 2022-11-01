import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "./AuthProvider"

export default function Login() {
	const navigate = useNavigate()
	const { setUserData, setToken } = useContext(AuthContext)

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	function handleLogin (evt) {
		evt.preventDefault()

		axios.post('https://dummyjson.com/auth/login', {
			username,
			password
		}).then(res => {
			console.log(res.data)
			setUserData(res.data)
			setToken(res.data.token)
			navigate('/')
		}).catch(err => {
			console.log(err.response)
			alert(err.message)
		})
	}

	return <>
		<h1>Login Form</h1>

		<form onSubmit={handleLogin}>
			<label>
				Username: <br />
				<input
					required
					type="text"
					value={username}
					onChange={evt => setUsername(evt.target.value)} />
			</label>
			<br /><br />

			<label>
				Password: <br />
				<input
					required
					type="password"
					value={password}
					onChange={evt => setPassword(evt.target.value)} />
			</label>
			<br /><br />

			<button>
				Login
			</button>
		</form>
	</>
}