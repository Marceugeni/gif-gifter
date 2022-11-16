import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import './App.css';

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
     {categories.map((category) => 
        <GifGrid key={category} category={category} />
        )}
    </div>
  );
}

export default App;
