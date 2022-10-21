import React from 'react'
import Anak, { Name, Age } from './Children'
import Lifecycle from './Lifecycle'
import SideEffect from './SideEffect'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: 'abid',
      umur: 18,
      munculinLifecycle: true,
      munculinSideEffect: true
    }
  }


  ubahNama() {
    this.setState({
      name: 'Ahmad'
    })
  }

  render () {
    return <div>
      <h1>Hai Ibu {this.state.name}</h1>
      <button onClick={() => this.ubahNama()}>
        Ubah Nama {Name} {Age}
      </button>
      <Anak name="Bambang" sebutNama={(namaYgDisebut) => {
        alert('Hai ' + namaYgDisebut)
        this.setState({
          name: namaYgDisebut
        })
      }} />

      <button onClick={() => this.setState({ munculinLifecycle: false })}>
        hilangin Lifecycle
      </button>

      {this.state.munculinLifecycle
      ? <>
          <h1>Aku Bagian dari Lifecycle</h1>
          <h2>Aku Juga</h2>
          <Lifecycle name={this.state.name} />
        </>
      : this.state.name == 'abid'
      ? <h2>Nama ku abid</h2>
      : this.state.name == 'Ahmad'
      ? <h2>Namaku Ahmad</h2>
      : <h2>Aku bukan siapa2</h2>}

      <button onClick={() => this.setState({ munculinSideEffect: false })}>
        hilangin side effect
      </button>
      {this.state.munculinSideEffect
      ? <SideEffect />
      : null}
    </div>
  }
}