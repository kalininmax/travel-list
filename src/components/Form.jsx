/* eslint-disable react/prop-types */
import { useState } from 'react';

const Form = ({ onAddItem }) => {
  const [desc, setDesc] = useState('');
  const [qty, setQty] = useState(1);

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    if (!desc) {
      return;
    }

    onAddItem({ desc, qty, packed: false, id: Date.now() });
    setDesc('');
    setQty(1);
  };

  return (
    <form className="add-form" onSubmit={onFormSubmit}>
      <h3>What do you need for your trip?</h3>
      <div>
        <select value={qty} onChange={(evt) => setQty(+evt.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={desc}
          onChange={(evt) => setDesc(evt.target.value)}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default Form;
