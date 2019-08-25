import React, { useState } from 'react';

interface Organizer {
  name: string,
}

const App: React.FC = (): JSX.Element => {
  const [name, setName]: [string, Function] = useState('Igor Halfeld');

  function greeting(name: string): void {
    setName(name);
  }

  const typescriptBrOrganizers: Organizer[] = [
    { name: 'Lucas' },
    { name: 'Vitor' },
    { name: 'Roz' },
  ];

  return (
    <React.Fragment>
      <h1>Hello, {name}</h1>
      <ul>
        {
          typescriptBrOrganizers.map(organizer => (
            <li>{organizer.name}</li>
          ))
        }
      </ul>
      <button onClick={() => greeting('TypescriptBR')}>Say hello!</button>
    </React.Fragment>
  );
};

export default App;