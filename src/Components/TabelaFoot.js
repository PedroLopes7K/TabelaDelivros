import React from 'react'

const TabelaFoot = props => {
  return (
    <tfoot>
      <tr>
        <td colSpan={4}> Quantiddade de livros na tabela: {props.qdeLivros}</td>
      </tr>
    </tfoot>
  )
}

export default TabelaFoot
