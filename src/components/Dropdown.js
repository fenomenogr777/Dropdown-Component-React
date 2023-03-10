import { useState, useEffect, useRef } from 'react';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickValue = value => {
    onChange(value);
    setIsOpen(false);
  };

  // SET isOpen TO FALSE WHEN YOU CLICK SOMEWHERE ELSE
  useEffect(() => {
    const handler = e => {
      // GUARD
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const renderedOptions = options.map(option => {
    return (
      <div key={option.value} onClick={() => handleClickValue(option)}>
        {option.title}
      </div>
    );
  });

  return (
    <div ref={divEl}>
      <div onClick={handleClick}>{value?.title ?? 'Selected...'}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
