import { useState, useEffect, useCallback } from 'react';

const ImprovedCode = ({ data, onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Fetch or update something
  }, [data]);

  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(inputValue);
    },
    [inputValue, onSubmit]
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter something"
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ImprovedCode;
