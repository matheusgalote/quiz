import React from 'react'

const Menu = ({ perguntas, respostas, setAtual, atual }) => {

  const style = {
    width: '20px',
    height: '20px',
    padding: '10px',
    borderRadius: '5px',
    margin: '5px',
    textTransform: 'uppercase',
    color: '#1A4D2E',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: '2px solid #14C38E'
  }

  if (atual !== perguntas.length) {


    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          perguntas.map((pergunta, index) => {
            return (
              <div onClick={() => setAtual(index)} key={pergunta.id} style={style} className={respostas[pergunta.id] !== '' ? 'success' : ''}>
                {pergunta.id}
              </div>
            );
          })
        }
      </div>
    )
  } else return null;

}

export default Menu