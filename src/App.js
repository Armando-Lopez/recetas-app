import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const APP_ID = "c31c1b56";
  const APP_KEY = "949c117485a2e837973df77be5c71f8d";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [food, setFood] = useState("chicken");

  useEffect(() => {
    const getRecipes = async () => {
      const res = await fetch(
        `https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await res.json();
      setRecipes(data.hits);
    };
    getRecipes();
  }, [food]);

  const onSearch = (e) => {
    const value = e.target.value.trim();
    setSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFood(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={onSearch} />
        <button type="submit">Buscar</button>
      </form>

      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe
            key={i}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            img={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
