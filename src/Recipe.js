import React from 'react'
import style from './recipe.module.css'

const Recipe = ({title,calories,image, ingredients}) => {
    return (
        <section className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients =>(
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image}></img>
        </section>
    );
}

export default Recipe