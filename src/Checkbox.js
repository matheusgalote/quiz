import React from 'react'

const Checkbox = ({ options, handleChange, id, valor, ...props }) => {

  
  return (
    <>
      {
        options.map(opcao => {
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
              {opcao}
            </label>
          );
        })
      }

    </>
  )
}

export default Checkbox