import React from 'react';
import Checkbox from './Checkbox';
import Menu from './Menu';

const perguntas = [
  {
    pergunta: 'Qual a catergoria de Nen do Gon?',
    options: [
      'Emissor',
      'Manipulador',
      'Aprimoramento',
      'Conjuração'
    ],
    resposta: 'Emissor',
    id: 'p1',
  },
  {
    pergunta: `O universo de Hunter X Hunter é bastante vasto, e nele pode se escolher em qual área atuar sendo um caçador.
    Dentre os tipos de caçadores podemos citar os seguintes: `,
    options: [
      'Gourmet, Reliquias e Cultivador',
      'Restaurador, Caçador de recompensas e Midiatico',
      'Adestrador, Alquimista e Manejador',
      'Gourmet, Lista Negra e Arqueólogo'
    ],
    resposta: 'Gourmet, Lista Negra e Arqueólogo',
    id: 'p2',
  },
  {
    pergunta: `Entre os caçadores esse é considerado uma refêrencia quando se trata do uso de Nen: `,
    options: [
      'Netero',
      'Kurapika',
      'Aluka',
      'Morel'
    ],
    resposta: 'Netero',
    id: 'p3',
  },
]

const Quiz = () => {

  const [atual, setAtual] = React.useState(0);
  const [valor, setValor] = React.useState('');
  const [respostas, setRespostas] = React.useState({
    'p1': '',
    'p2': '',
    'p3': ''
  });
  const [resultado, setResultado] = React.useState(null);

  function pontuacao() {

    const corretas = perguntas.filter(({ id, resposta }) => respostas[id] === resposta);
    setAtual(atual+1);

    setResultado(`Sua pontuação foi: ${((corretas.length * 100) / perguntas.length).toFixed(2)}! Você acertou ${corretas.length} de ${perguntas.length}`);
  }

  function handleChange({ target }) {
    if (!valor) {
      setValor(target.value);
      setRespostas({ ...respostas, [target.id]: target.value })
    } else {
      setValor('');
      setRespostas({ ...respostas, [target.id]: '' })
    }
  }

  function proximaPergunta() {
    setAtual(atual + 1);
  }

  function anterior() {
    if (atual > 0) {
      setAtual(atual - 1);
    }
  }


  return (
    <div className='flex'>
      <form onSubmit={(e) => e.preventDefault()} className='form'>
        {
          perguntas.map((pergunta, index) => {
            return atual === index && (
              <fieldset key={pergunta.id}>
                <legend>{pergunta.pergunta}</legend>
                <Checkbox key={pergunta.id} id={pergunta.id} valor={respostas[pergunta.id]} options={pergunta.options} handleChange={handleChange} />
              </fieldset>
            );
          })
        }

        {
          resultado ? <p>{resultado}</p> :
            <>
              {atual > 0 && <button onClick={anterior}><i className="fa fa-arrow-left" style={{ margin: '5px' }} aria-hidden="true"></i>Anterior</button>}
              {atual < perguntas.length - 1 && <button onClick={proximaPergunta}>Próxima<i className="fa fa-arrow-right" style={{ margin: '5px' }} aria-hidden="true"></i></button>}
              {atual === perguntas.length - 1 && <button onClick={pontuacao}>Enviar<i className="fa fa-arrow-right" style={{ margin: '5px' }} aria-hidden="true"></i></button>}
            </>
        }
      </form>
      <Menu perguntas={perguntas} respostas={respostas} setAtual={setAtual} atual={atual} />
    </div>
  )
}

export default Quiz