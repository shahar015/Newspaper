import React from 'react';
import './Recipe.css';

function Recipe(props) {
  return (
    <div class="recipe-container">
      <div class="recipe-info">
        <h2>{props.title}</h2>
        <div className='recipe-instructions'>
        <div class="recipe">
          <h3>מצרכים:</h3>
          <ul>
            {props.ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div class="recipe">
          <h3>שלבי הכנה:</h3>
          <ol>
            {props.making.map((step) => (
              <li>{step}</li>
            ))}
          </ol>
        </div>
        </div>
      </div>
    </div>

  );
}

export default Recipe;
