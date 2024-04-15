import React from 'react'
import './Search.css'
import { useState } from 'react'
import { TbSearch } from "react-icons/tb";
import { AiFillCloseCircle } from 'react-icons/ai'
import ClipLoader from "react-spinners/ClipLoader";
import { useQuestionsStore } from '../../stores/questions.js';
import { useRecipeStore } from '../../stores/recipe.js';
import Cards from '../../components/Cards/Cards.jsx';


function Search() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  // Use question tore
  const { questions, searchQuestion } = useQuestionsStore();

  const { filters, recipes, addFilter, deleteFilter, searchRecipe } = useRecipeStore((state) => state)

  return (
    <div className='search'>
      <form className='searchform' onSubmit={(e) => {
        e.preventDefault();
      }}
      >
        <div className='searchbar'>
          <input type="text" placeholder="Add your ingredients here" value={query} onChange={(e) => setQuery(e.target.value)} />
          <button className="btn" onClick={() => { addFilter(query); setQuery('') }}>+</button> <button className='submit' type="submit"><TbSearch /></button>
        </div>

        <div className='items'>
          {filters.map((filter, index) => (
            <div key={index} className="tag">
              {filter}
              <button className="btn2" onClick={() => deleteFilter(index)}> <AiFillCloseCircle /> </button>
            </div>
          ))}
        </div>
      </form>
      {loading ? <div className='loader'><ClipLoader size={150} color={" rgb(239, 133, 11)"} /> </div> :
        <div className="results">
          <h1 className='h1_'>Search Results</h1>
          <p className='h2_'>{recipes ? `${recipes.length} Recipes available` : ''}</p>
          <div className="recipe-cards">
            {recipes && recipes.map((recipe, index) => <Cards key={recipe.uri} rec={recipe.recipe} />
            )}
          </div>
        </div>
      }
    </div>
  )
}

export default Search;
