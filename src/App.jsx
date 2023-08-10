import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

function App() {
  const [items, setItems] = useState([]);

  const onAddItem = (item) => setItems((items) => [...items, item]);

  const onDeleteItem = (id) =>
    setItems((items) => items.filter((item) => item.id !== id));

  const onToggleItem = (id) =>
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );

  const onClearList = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?'
    );
    confirmed && setItems([]);
  };

  return (
    <div className="app">
      <Header />
      <Form onAddItem={onAddItem} />
      <PackingList
        list={items}
        onDeleteItem={onDeleteItem}
        onToggleItem={onToggleItem}
        onClearList={onClearList}
      />
      <Stats list={items} />
    </div>
  );
}

export default App;
