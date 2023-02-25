import { useState } from 'react';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickValue = value => {
    onChange(value);
    setIsOpen(false);
  };

  const renderedOptions = options.map(option => {
    return (
      <div key={option.value} onClick={() => handleClickValue(option)}>
        {option.title}
      </div>
    );
  });

  return (
    <div>
      <div onClick={handleClick}>{value?.title ?? 'Selected...'}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
