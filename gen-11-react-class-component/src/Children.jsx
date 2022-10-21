import React, { Component } from 'react'

export const Name = 'bambang'
export const Age = 18

export default class Children extends Component {
	render() {
		return <div>
			<h2>Aku Children {this.props.name}</h2>
			<button onClick={() => this.props.sebutNama('Ahmad')}>
				sebut nama
			</button>
		</div>
	}
}