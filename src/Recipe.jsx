// import React, { useState, useEffect } from 'react';

// const ID = "62a10662";
// const Key = "bd35dff405774ecee35ac591a44c7410";

// const RecipeApp = () => {
//   const [query, setQuery] = useState('');
//   const [recipes, setRecipes] = useState([]);
//   const [selectedRecipe, setSelectedRecipe] = useState(null);

//   // Define the fetchRecipes function inside the component
//   const fetchRecipes = async (query, includeNonVeg) => {
//     try {
//       let url = `https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${Key}`;
//       if (includeNonVeg) {
//         url += '&health=non-vegetarian';
//       }
//       const response = await fetch(url);
//       const data = await response.json();
//       setRecipes(data.hits.map(hit => hit.recipe));
//     } catch (error) {
//       console.error('Error fetching recipes:', error);
//     }
//   };

//   useEffect(() => {
//     if (query.trim() !== '') {
//       fetchRecipes(query, true); // Set true to include non-vegetarian items
//     }
//   }, [query]);

//   const handleSearch = () => {
//     if (query.trim() !== '') {
//       fetchRecipes(query, true);
//     }
//   };

//   const handleRecipeClick = (recipe) => {
//     setSelectedRecipe(recipe);
//   };

//   const handleCloseRecipe = () => {
//     setSelectedRecipe(null);
//   };

//   return (
//     <div>
//       <h1>Food Recipe App</h1>
//       <div>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search for recipes..."
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       {selectedRecipe ? (
//         <div>
//           <h2>{selectedRecipe.label}</h2>
//           <img src={selectedRecipe.image} alt={selectedRecipe.label} />
//           <h3>Ingredients:</h3>
//           <ul>
//             {selectedRecipe.ingredients.map((ingredient, index) => (
//               <li key={index}>{ingredient.text}</li>
//             ))}
//           </ul>
//           <h3>Instructions:</h3>
//           <ol>
//             {selectedRecipe.instructions ? (
//               selectedRecipe.instructions.map((instruction, index) => (
//                 <li key={index}>{instruction}</li>
//               ))
//             ) : (
//               <li>No instructions available</li>
//             )}
//           </ol>
//           <button onClick={handleCloseRecipe}>Close</button>
//         </div>
//       ) : (
//         <ul>
//           {recipes.map(recipe => (
//             <li key={recipe.uri}>
//               <img
//                 src={recipe.image}
//                 alt={recipe.label}
//                 onClick={() => handleRecipeClick(recipe)}
//                 style={{ cursor: 'pointer' }}
//               />
//               <h2
//                 onClick={() => handleRecipeClick(recipe)}
//                 style={{ cursor: 'pointer' }}
//               >
//                 {recipe.label}
//               </h2>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default RecipeApp;















// import React, { useState, useEffect } from 'react';

// const ID = "62a10662";
// const Key = "bd35dff405774ecee35ac591a44c7410";

// const RecipeApp = () => {
//   const [query, setQuery] = useState('');
//   const [recipes, setRecipes] = useState([]);
//   const [selectedRecipe, setSelectedRecipe] = useState(null);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${Key}`);
//         const data = await response.json();
//         setRecipes(data.hits.map(hit => hit.recipe));
//       } catch (error) {
//         console.error('Error fetching recipes:', error);
//       }
//     };

//     if (query.trim() !== '') {
//       fetchRecipes();
//     }
//   }, [query]);

//   const handleSearch = () => {
//     if (query.trim() !== '') {
//     //   fetchRecipes();
//     }
//   };

//   const handleRecipeClick = (recipe) => {
//     setSelectedRecipe(recipe);
//   };

//   const handleCloseRecipe = () => {
//     setSelectedRecipe(null);
//   };

//   return (
//     // <center>
//     <div>
//       <h1>Food Recipe App</h1>
//       <div>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search for recipes..."
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       {selectedRecipe ? (
//         <div>
//           <h2>{selectedRecipe.label}</h2>
//           <img src={selectedRecipe.image} alt={selectedRecipe.label} />
//           <h3>Ingredients:</h3>
//           <ul>
//             {selectedRecipe.ingredients.map((ingredient, index) => (
//               <li key={index}>{ingredient.text}</li>
//             ))}
//           </ul>
//           <h3>Instructions:</h3>
//           <ol>
//             {selectedRecipe.instructions ? (
//               selectedRecipe.instructions.map((instruction, index) => (
//                 <li key={index}>{instruction}</li>
//               ))
//             ) : (
//               <li>No instructions available</li>
//             )}
//           </ol>
//           <button onClick={handleCloseRecipe}>Close</button>
//         </div>
//       ) : (
//         <ul>
//           {recipes.map(recipe => (
//             <li key={recipe.uri}>
//               <img
//                 src={recipe.image}
//                 alt={recipe.label}
//                 onClick={() => handleRecipeClick(recipe)}
//                 style={{ cursor: 'pointer' }}
//               />
//               <h2
//                 onClick={() => handleRecipeClick(recipe)}
//                 style={{ cursor: 'pointer' }}
//               >
//                 {recipe.label}
//               </h2>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//     // </center>
//   );
// };

// export default RecipeApp;
