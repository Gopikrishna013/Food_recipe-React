import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Gif from '../uploads/giff.gif'


function RecipeDetails() {
    const { id } = useParams(); 
    const [recipeDetails, setRecipeDetails] = useState(null);
    const [youtubeId, setYoutubeId] = useState(null);

    useEffect(() => {
        
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.meals) {
                    setRecipeDetails(data.meals[0]); 

                    const strYoutube = data.meals[0].strYoutube;
                    const id = strYoutube.split("=")[1];
                    setYoutubeId(id);
                }
            })
            .catch(error => console.error('Error fetching recipe details:', error));
    }, [id]);

    if (!recipeDetails) {
        return <div><img src={Gif}/></div>; 
    }
                     
    return (
        <div className='total-details'>
            <h2 className='details-h2'>&nbsp;{recipeDetails.strMeal}&nbsp;</h2>
            <div className='details-2'>

                <img src={recipeDetails.strMealThumb} alt={recipeDetails.strMeal} className='details-img' />

                <div className='card-ingredients'>
                    <h3 className='ingredients-h3 mt-0'>Ingredients</h3>

                    <ol >
                        {/* Render ingredients dynamically */}
                        {Object.keys(recipeDetails)
                            .filter(key => key.startsWith('strIngredient') && recipeDetails[key])
                            .map(key => (
                                <li className='ingredients-list' key={key}>{recipeDetails[key]}</li>
                            ))}
                    </ol>
                </div>
            </div>
            
            <div class="card-instructions" style={{ width: '60rem' }}>
                <div class="card-body">
                    <h5 class="instruction-title">&nbsp;Instructions&nbsp;</h5>
                 
                    <p class="instruction-text">{recipeDetails.strInstructions}</p>

                </div>
            </div>
           
            {/* <div className="video-you"> */}
                <h1 className='video-h1'>Video-Instructions</h1>
                <iframe type='video/mp4' width=" 100%" height="515" title="recipeVideo" className='recipe-video' src={`https://www.youtube.com/embed/${youtubeId}`}> </iframe>

            {/* </div> */}
        </div>

    );
}

export default RecipeDetails;