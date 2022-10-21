import React, { Component } from 'react'

export default class Lifecycle extends Component {
	constructor() {
		super()

		this.state = {
			mobil: '',
			motor: '',
			rangkuman: ''
		}
	}

	componentDidMount() {
		console.log('subscribe ke db gopay')
		document.addEventListener('wheel', this.getMouseMoveEvent)
		console.log('ngambil data dari database')
		this.setState({
			mobil: 'Avanza',
			motor: 'Beat'
		})
	}

	componentDidUpdate(propsSebelumnya, stateSebelumnya) {
		console.log(propsSebelumnya)
		console.log(this.props)
		// console.log(stateSebelumnya)
		// console.log(this.state)

		if (stateSebelumnya.mobil !== this.state.mobil || stateSebelumnya.motor !== this.state.motor) {
			this.setState({
				rangkuman: `Saya punya mobil ${this.state.mobil} dan motor ${this.state.motor}`
			})
		}
	}

	componentWillUnmount() {
		console.log('saya akan menghilang')
		console.log('unsubscribe ke db gopay')
		document.removeEventListener('wheel', this.getMouseMoveEvent)
		this.setState({
			mobil: '',
			motor: '',
			rangkuman: ''
		})
	}

	getMouseMoveEvent(evt) {
		// console.log(evt.offsetY)
	}

	render() {
		return <div>
			<h3>Nama saya: {this.props.name}</h3>
			<ul>
				<li>Mobil: {this.state.mobil}</li>
				<li>Motor: {this.state.motor}</li>
			</ul>
			<p>{this.state.rangkuman}</p>
			<button onClick={() => this.setState({ mobil: 'Kijang' })}>
				Ubah Mobil
			</button>
			<button onClick={() => this.setState({ motor: 'Supra' })}>
				Ubah Motor
			</button>
		</div>
	}
}