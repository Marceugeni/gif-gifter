import { useState } from 'react';
import CardList from './components/CardList';
import './App.css';
import AddCategory from './components/AddCategory';

function App() {
const [categories, setCategories] = useState([]);

const addCategory = (addCategory) => {
  if (categories.includes(addCategory)) return;
  setCategories([addCategory, ...categories]);
}

  return (
    <div className="app-container">
     <h1>GifSmarter!🤣</h1>
     <AddCategory addCategory={ addCategory } />
     <CardList categories={categories} />
    </div>
  );
}

export default App;
