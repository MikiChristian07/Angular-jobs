import React from 'react'

const App = () => {
  const x = 10;
  const y = 20; 
  const names = ['Brad', 'Mary', 'Joe', 'Sarah'];

  const sum = x+y;

  return (
    <>
      <div className='text-5xl'>App</div>
      <p>The Sum of {x} + {y} is = {sum} </p>
      <ul>
        {names.map((name, index) => (
            <li key={ index }>{name}</li>
        ))}
      </ul>
    </>
  )
}

export default App