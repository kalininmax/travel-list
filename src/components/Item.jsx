/* eslint-disable react/prop-types */
const Item = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
          {item.qty} {item.desc}
        </span>
      </label>
      <button type="button" onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
};

export default Item;
