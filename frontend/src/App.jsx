import { useState } from 'react';
import './App.css';
import { useAddItemMutation, useDeleteItemMutation, useGetItemsQuery } from './store/itemsApi';

const App = () => {

  // Fetching items from the API
  const { data: items, error, isLoading } = useGetItemsQuery();
  // Mutation hooks
  const [addItem] = useAddItemMutation();
  const [deleteItem] = useDeleteItemMutation();

  const [newItem, setNewItem] = useState('');

  // Add Handler
  const handleAddItem = async () => {
    if (newItem.trim()) { // If the input field is not empty
      await addItem({ name: newItem }); // Add the new item
      setNewItem(''); // Clear the input field
    }
  };

  // Delete Handler
  const handleDeleteItem = async (id) => {
    await deleteItem(id); // Delete the item with the given id
  };

  return (
    <div className={"app"}>
      <h1>Items</h1>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading items</p>}
      <ul>
        {items?.map((item) => (
          <li key={item._id}>
            {item.name}
            <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)} 
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default App;