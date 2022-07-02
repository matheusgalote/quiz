import React from 'react';
import Checkbox from './Checkbox';

const perguntas = [
  {
    pergunta: 'Qual a catergoria de Nen do Gon de Hunter X Hunter?',
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
]

const Quiz = () => {

  const [atual, setAtual] = React.useState(0);
  const [valor, setValor] = React.useState('');
  const [respostas, setRespostas] = React.useState({
    'p1': '',
    'p2': ''
  });
  const [resultado, setResultado] = React.useState(null);

  function pontuacao() {

    const corretas = perguntas.filter(({ id, resposta }) => respostas[id] === resposta);

    setResultado(`Sua pontuação foi: ${(corretas.length * 100) / perguntas.length}! Você acertou ${corretas.length} de ${perguntas.length}`);
  }

  function handleChange({ target }) {
    setValor(target.value);

    setRespostas({ ...respostas, [target.id]: target.value })
  }

  function proximaPergunta() {

    if (atual < perguntas.length - 1) {
      setAtual(atual + 1);
    }
    else {
      setAtual(atual + 1);
      pontuacao()
    }
  }


  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {
        perguntas.map((pergunta, index) => {
          return atual === index && (
            <div key={pergunta.id}>
              <h1>{pergunta.pergunta}</h1>
              <Checkbox key={pergunta.id} id={pergunta.id} valor={respostas[pergunta.id]} options={pergunta.options} handleChange={handleChange} />
            </div>
          );
        })
      }
      <button onClick={proximaPergunta}>Próxima</button>
      {resultado}
    </form>
  )
}

export default Quiz