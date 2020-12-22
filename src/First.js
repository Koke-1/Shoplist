import React, { useEffect, useState } from 'react'
import Recipe from './Recipe.js'

function First() {
    
    const APP_ID = '7db50843';
    const APP_KEY = '2b405e3aadc85d210fac4c05768b8c00';

    const [Recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('chicken')

    useEffect(()=>{
        getRecipes();
    },[query] )
    const getRecipes = async() => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();
        setRecipes(data.hits)
        console.log(data.hits)
    }

    const updateSearch = e => {
        setSearch(e.target.value);
       
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search)
        setSearch('');
    }

    return (
        <section className='First'>
            <form onSubmit={getSearch} className='search-form'>
                <input type='text' className='search-bar' value ={search} onChange={updateSearch} />
                <button type = 'submit' className='search-button'>Search</button>
            </form>
            {Recipes.map(Recipes =>(
                <Recipe key ={Recipes.recipe.label}
                title = {Recipes.recipe.label} 
                calories={Recipes.recipe.calories} 
                image={Recipes.recipe.image}
                ingredients ={Recipes.recipe.ingredients} />
            ))}
        </section>
    )
}

export default First