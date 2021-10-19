import React from 'react';
import propTypes from "prop-types";

const foodWhatILike = [
  {
    id : 1,
    name : "Kimchi",
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9UbaWIQhQ_kybBwlg4RD_wHaE8%26pid%3DApi&f=1",
    rating : 4.5
  },
  {
    id : 2,
    name : "Ramen",
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.mIrJYFEo-bS1lLKWV2pV2wHaE7%26pid%3DApi&f=1",
    rating : 3.8
  },
  {
    id : 3,
    name : "Noodle",
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vFeytGRIasd8dLMA1F0OUgHaFY%26pid%3DApi&f=1",
    rating : 4.1
  },
  {
    id : 4,
    name : "BBQ",
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.X03PZT37-8ZNXtxy3c7k-QHaFe%26pid%3DApi&f=1",
    rating : 5.0
  }
];

Food.propTypes = {
  name : propTypes.string.isRequired,
  pictures : propTypes.string.isRequired,
  rating : propTypes.number.isRequired
}

function Food({ name, pictures, rating }) {
  return (
    <div>
      <h1>I like { name }</h1>
      <h3>{rating}/5.0</h3>
      <img src={ pictures }/>
    </div>
  );
}

function App() {
  return (
    <div>
      { foodWhatILike.map(dish => 
        <Food key={dish.id} name={dish.name} pictures={dish.image} rating={dish.rating}/>
      )}
    </div>
  );
}

export default App;
