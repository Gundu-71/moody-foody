import React, { useState, useEffect } from 'react'
import './Question.css'
import { useQuestionsStore } from '../../stores/questions';

function Question() {
  const { questions, foundRecipes, matchAnswersAndFindRecipes, handleAnswerChange, loadRecipies } = useQuestionsStore((state) => state)

  useEffect(() => {
    loadRecipies().catch(console.error)
  }, [])

  // Components
  const Card = ({ recipe }) => {
    return (
      <div className='card'>
        {recipe.image &&
          <img
            src={recipe.image}
            alt={recipe.label}
            className="card-image"
            style={{ backgroundColor: 'orange' }}
          />
        }
        <div className='card-content'>
          <h3 className='card-title'>{recipe.label}</h3>
          <p className='card-description'>
            <a href={recipe.url}>View Recipe</a>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div style={{ paddingTop: '100px', margin: 'auto', width: '95%', padding: '100px, 10px, 10px, 10px', display: 'grid', gridTemplateColumns: '35% 55%' }}>
      <div>
        <h2 style={{ fontSize: '3em', color: 'rgb(255, 165, 0)', marginTop: '1em' }}>Recipes Quiz</h2>
        {questions &&
          <form onSubmit={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }

          }>
            {questions?.map((question, index) => (
              <div key={question.id}>
                <p>
                  <b>
                    {(index + 1)}. {question.question}
                  </b>
                </p>
                <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                  {question?.options.map((opt, index) => (
                    <li key={index} style={{ borderBottom: '1px solid #ddd', padding: '5px 10px' }}>
                      <input type='radio' name={`question${question.id}`} value={opt.value} onChange={() => handleAnswerChange(question.id, index)} required />
                      &nbsp;{opt.label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <input type='submit' value='Zoek recepten' onClick={() => matchAnswersAndFindRecipes(useQuestionsStore.getState())}
              style={{
                backgroundColor: 'orange',
                color: 'white',
                fontSize: '1.2rem',
                padding: '10px 20px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
              }}
            />
          </form>
        }
      </div>
      <div>
        <h2 style={{ fontSize: '3em', color: 'rgb(255, 165, 0)', marginTop: '1em' }}>Quiz results</h2>
        {foundRecipes.length === 0 ? (<p>Geen recepten gevonden. vul eerst de vragen in.</p>) : (
          <div className='card-list'>
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
