import { useState } from 'react';
import Dropdown from './components/Dropdown';

function App() {
  const [selected, setSelected] = useState(null);

  const handleClickSelected = value => {
    setSelected(value);
  };

  const options = [
    {
      title: 'Red',
      value: 'red',
    },
    {
      title: 'Blue',
      value: 'blue',
    },
    {
      title: 'Green',
      value: 'green',
    },
  ];

  return (
    <Dropdown
      options={options}
      value={selected}
      onChange={handleClickSelected}
    />
  );
}

export default App;
