import React, { Component } from 'react'
import TabelaBody from './Components/TabelaBody'
import TabelaFoot from './Components/TabelaFoot'
import TabelaHead from './Components/TabelaHead'

class App extends Component {
  state = {
    livros: [
      {
        id: '978-85-7522-632-2',
        titulo: 'CSS Grid Layout',
        autor: 'Maurício Samy Silva'
      },
      {
        id: '978-85-7522-677-3',
        titulo: 'Node Essencial',
        autor: 'Ricardo R. Lecheta'
      },
      {
        id: '978-85-7522-512-7',
        titulo: 'Aprendendo Material Design',
        autor: 'Kyle Mew'
      }
    ]
  }
  render() {
    return (
      <table className="tabela">
        <TabelaHead />
        <TabelaFoot />
        <TabelaBody livros={this.state.livros} />
      </table>
    )
  }
}

export default App
