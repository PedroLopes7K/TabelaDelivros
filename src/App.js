import React, { Component } from 'react'
import TabelaBody from './Components/TabelaBody'
import TabelaFoot from './Components/TabelaFoot'
import TabelaHead from './Components/TabelaHead'

class App extends Component {
  state = {
    livros: []
  }

  componentDidMount() {
    fetch('./api/livros.json')
      .then(resposta => resposta.json())
      .then(livros => this.setState({ livros }))
      .catch(function (error) {
        console.log('ERRO NA REQUISIÇÃO')
      })
      .finally(function () {
        console.log('sempre retorna')
      })
  }
  handleRemoverLivro = id => {
    const livros = this.state.livros.filter(l => l.id !== id)
    this.setState({ livros })
  }
  handleOrdenarCrescente = titulo => {
    const livros = this.state.livros.sort((a, b) =>
      a.titulo < b.titulo ? -1 : 0
    )
    this.setState({ livros })
  }
  handleOrdenarDecrescente = titulo => {
    const livros = this.state.livros.sort((a, b) =>
      a.titulo < b.titulo ? -1 : 0
    )
    livros.reverse()
    this.setState({ livros })
  }

  render() {
    return (
      <table className="tabela">
        <TabelaHead
          ordenarCrescente={this.handleOrdenarCrescente}
          ordenarDecrescente={this.handleOrdenarDecrescente}
        />
        <TabelaFoot qdeLivros={this.state.livros.length} />
        <TabelaBody
          livros={this.state.livros}
          removerLinha={this.handleRemoverLivro}
        />
      </table>
    )
  }
}

export default App
