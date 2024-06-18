import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Style.css'
import Image from '../uploads/Main1.jpg'
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer.jsx'
// import Footer from '../components/Footer.jsx'

import Button from 'react-bootstrap/Button';


function Recipe() {
    const [search, setSearch] = useState('');
    const [url, setUrl] = useState('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.meals) {
                    setMeals(data.meals);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [url]);

    const handleSubmit = event => {
        event.preventDefault();
        const newUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
        setUrl(newUrl);
    };

    return (
        <div>
            <h2 className='f-h2-f'>What to <i className='f-tag-f'> COOK TODAY </i></h2>
            <form onSubmit={handleSubmit} className='form'>
                <input type='text' value={search} onChange={e => setSearch(e.target.value)} className='input' placeholder='Search Your Recipe Here...'/>
                <button type='submit' className='btn-1'>Search</button>
            </form>
           
            <div className='container'>
                <div className='row'>
                    {meals.map((meal, index) => (
                        <div className='col-lg-3 col-md-6 card mt-5 px-0' key={meal.idMeal}>
                            <Link className='meal' to={`/recipe/${meal.idMeal}`}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', right: '0', position:    'absolute' }}>
                                    <span class="badge rounded-pill bg-danger" style={{fontSize:'20px'}}></span>
                                </div>
                                <img src={meal.strMealThumb} alt={meal.strMeal} className='meal-img'  />
                                <h3 className='meal-name'>{meal.strMeal}</h3>

                            </Link>
                        </div>
                    ))}
                </div>
            </div>


    <div className='container-fluid'>
        {/* <Banner1/> */}
        {/* <img className='f-banner1' src={Banner1} fluid /> */}

        <Card className="f-cardf bg-dark text-white">
            <Card.Img className='f-Cardimg' src={Image} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title className='food-card-title' ><b>Food Recipe </b> for the taste</Card.Title>
                <Card.Text className='food-card-text'>
                As soon as the temperature starts to drop, <br/> we break out this collection of favorite <br/> soups,stews,casseroles, <br/> and meaty classics.
                </Card.Text>
                <Button className='food-btn' variant="warning" href='https://en.wikipedia.org/wiki/Hyderabadi_biryani' > Read More..</Button>
            </Card.ImgOverlay>
        </Card>
    </div>



            {/* <Card className="card-food-f bg-dark text-white">
            <Card.Img className='card-food-fimg' src={Image} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title className='card-tag' > <b>Food Recipe </b> for the taste</Card.Title>
                <Card.Text className='f-card-text'>
                    As soon as the temperature starts to drop, we break out this collection of favorite soups,stews,casseroles, and meaty classics.
                </Card.Text>
                {/* <Button className='f-btn' variant="warning">Read More..</Button> */}
            {/* </Card.ImgOverlay>
        </Card> */}



        <Footer className='footer'/>


        </div>


    );
}

export default Recipe;