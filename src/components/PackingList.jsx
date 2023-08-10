/* eslint-disable react/prop-types */
import { useState } from 'react';
import Item from './Item';

const PackingList = ({ list, onDeleteItem, onToggleItem, onClearList }) => {
  const [sortBy, setSortBy] = useState('input');

  let sortedList;

  switch (sortBy) {
    case 'desc':
      sortedList = [...list].sort((a, b) => a.desc.localeCompare(b.desc));
      break;
    case 'status':
      sortedList = [...list].sort((a, b) => +a.packed - +b.packed);
      break;

    default:
      sortedList = list;
      break;
  }

  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(evt) => setSortBy(evt.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="desc">Sort by description</option>
          <option value="status">Sort by status</option>
        </select>
        {!!sortedList.length && (
          <button type="button" onClick={onClearList}>
            Clear list
          </button>
        )}
      </div>
    </div>
  );
};

export default PackingList;
