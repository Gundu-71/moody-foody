import React, { useState, useEffect } from 'react'
import './Question.css'
import { useQuestionsStore } from '../../stores/questions';

function Question() {
  const { questions, foundRecipes, matchAnswersAndFindRecipes, handleAnswerChange } = useQuestionsStore((state) => state)

  const Card = ({ recipe }) => {
    return (
      <div className="card">
        {recipe.image && <img src={recipe.image} alt={recipe.label} className="card-image" />}
        <div className="card-content">
          <h3 className="card-title">{recipe.label}</h3>
          <p className="card-description">
            <a href={recipe.url}>View Recipe</a>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div style={{ paddingTop: '100px', margin: 'auto', width: '95%', padding: '100px, 10px, 10px, 10px', display: 'grid', gridTemplateColumns: '35% 55%' }}>
      <div>
        <h2>Recipes Quiz</h2>
        {questions &&
          <form onSubmit={(e) => {
            e.preventDefault()

          }

          }>
            {questions?.map((question, index) => (
              <div key={question.id}>
                <p>
                  <b>
                    {(index + 1)}. {question.question}
                  </b>
                </p>
                <ul>
                  {question?.options.map((opt, index) => (
                    <li key={index} style={{ listStyle: 'none' }}>
                      <input type="radio" name={`question${question.id}`} value={opt.value} onChange={() => handleAnswerChange(question.id, index)} required />
                      &nbsp;{opt.label}
                    </li>
                  ))}
                </ul>

              </div>
            ))}
            <input type="submit" value="submit" onClick={() => matchAnswersAndFindRecipes(useQuestionsStore.getState())} />
          </form>
        }
      </div>
      <div>
        <h2>Recipes</h2>
        {foundRecipes.length === 0 ? (<p>Geen recepten gevonden. vul eerst de vragen in.</p>) : (
          // foundRecipes.map(foundRecipie => (
          //   <Cards key={foundRecipie.id} rec={foundRecipie} />
          // ))
          <div className="card-list">
            {foundRecipes.map((recipe, index) => (
              <Card key={index} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
};

export default Question;
