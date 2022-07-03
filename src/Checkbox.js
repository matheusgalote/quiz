import React from 'react'

const Checkbox = ({ options, handleChange, id, valor, ...props }) => {

  const letras = ['a) ', 'b) ', 'c) ', 'd) ']
  
  return (
    <>
      {
        options.map((opcao, index) => {
          return (
            <label key={opcao}>
              <input
                type="checkbox"
                name={opcao}
                id={id}
                value={opcao}
                checked={valor === opcao}
                onChange={handleChange}
                {...props}
              />
              {letras[index]}{opcao}
            </label>
          );
        })
      }

    </>
  )
}

export default Checkbox