import React from 'react'

import '../Style/Home.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Caro1 from '../uploads/car1.png'
import Caro2 from '../uploads/car2.png'
import Caro3 from '../uploads/car3.jpg'

import Footer from '../components/Footer.jsx'

// import { Card } from 'react-bootstrap/Card'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';


import Banner1 from '../uploads/banner1.webp'



function Home() {

  const [url, setUrl] = useState('https://www.themealdb.com/api/json/v1/1/search.php?f=n');
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


  return (
    <div>

      <Carousel>
        <Carousel.Item>
          {/* <Caro1 text="First slide" /> */}
          <img className="d-block w-100" src={Caro1} alt="First slide" />
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <Caro1 text="Second slide" /> */}
          <img className="d-block w-100" src={Caro2} alt="First slide" />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <Caro1 text="Third slide" /> */}
          <img className="d-block w-100" src={Caro3} alt="First slide" />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3> */}
            {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>





      {/* Cards  */}

      <div className='container'>
        <div className='row mx-'>
          {meals.map((meal, index) => (
            <div className='col-lg-3 col-md-6 card px-0  mt-5' key={meal.idMeal}>
              <Link className='recipe-h3' to={`/recipe/${meal.idMeal}`}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', right: '0', position: 'absolute' }}>
                  <span class="badge rounded-pill bg-danger" style={{ fontSize: '20px' }}>
                    <i class="fa fa-heart-o" style={{fontSize:'18px', color:'white'}}></i>
                  </span>
                </div>
                <img className='f-img' src={meal.strMealThumb} alt={meal.strMeal} />
              </Link>
              <p id='recipe-p'>{meal.strMeal}</p>
              <div className='f-rate'>
                Rating :
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <i class="fa fa-star-half-full"></i>

              </div>

            </div>
          ))}
        </div>
      </div>


      {/* Banner  */}

      <div className='container-fluid'>
        {/* <Banner1/> */}
        {/* <img className='f-banner1' src={Banner1} fluid /> */}

        <Card className="f-cardf bg-dark text-white">
          <Card.Img className='f-Cardimg' src={Banner1} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className='food-card-title' >The HomeChef Recipes</Card.Title>
            <Card.Text className='food-card-text'>
              HomeChef Recipes is a trusted resource for home cooks with more than 3,000<br /> tested recipes,  guides, and meal plans, drawing over 15 million<br /> readers each month from  around the world. We’re supported <br />by a group of recipe developers, food writers, recipe and<br /> product testers, photographers, and <br /> other creative professionals.
            </Card.Text>
            <Button className='food-btn' href='https://en.wikipedia.org/wiki/Chef' variant="warning" >Read More..</Button>
          </Card.ImgOverlay>
        </Card>
      </div>

      {/* Quote  */}

      {/* <div>
    <Container className='Chintu'>
      <Row className='f-Quote'>
        <Col>" Eat Your Food as your Medicines. Otherwise you have to eat Medicines as your Food"
        <p>--Rathan Tata</p>        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
    </div> */}

      {/* Footer  */}

      <Footer />

      {/* 
    <div className='f-footer'>
        <Container>
            <Row className='footer-list'>
                <Col xs={3}>
                
                    <ul>
                        <li><b>HomeChef</b></li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Recipe Index</li>
                        <li>Blogging Resources</li>
                        <li>Income Reports</li>
                        <li>Sponsored Content</li>
                        <li>Media Mentions</li>
                        <li>Contact</li>
                    </ul>
                </Col>
                <Col xs={3}>

                    <ul>
                        <li><b>FOOD & RECIPES</b></li>
                        <li>Sugar Free January</li>
                        <li>Freezer Meals 101</li>
                        <li>Quick and Easy Recipes</li>
                        <li>Instant Pot Recipes</li>
                        <li>Pasta Recipes</li>
                        <li>Vegan Recipes</li>
                        <li>Soup Recipes</li>
                        <li>Taco Recipes</li>
                        <li>Meal Prep Recipes</li>

                    </ul>
                
                </Col>
                <Col xs={6}>

                    <div className='footer-fd'>
                        <h3 className='f-tag'>HomeChef Feedback</h3>
                        <input className='f-inp' type='text' placeholder='Enter your Name' />  <br />
                        <input className='f-inp' type='email' placeholder='Enter Email' /> <br />
                        <Button className='f-btnn' variant="success">Submit</Button>
                    </div>
                </Col>
            </Row>
        </Container>

        <div className='f-icons'>

            <i class="fa fa-facebook-official gk"></i><i class="fa fa-google gk"></i><i class="fa fa-instagram gk"></i><i class="fa fa-linkedin-square gk"></i><i class="fa fa-pinterest-square gk"></i><i class="fa fa-twitter-square gk"></i>


        </div>



    </div> */}
      {/* </div>  */}





    </div >
  )
}

export default Home