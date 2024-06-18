import React, { useRef } from 'react'
import '../Style/Footer.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    const formRef = useRef(null); // Create a ref for the form

    const handleSubmit = (e) => {
      e.preventDefault();
  
      
      const name = formRef.current[0].value;
      const email = formRef.current[1].value;
  
     
      if (!name || !email) {
        alert('Please enter all the required information.');
        return;
      }
  
      alert('Your Credentials added Successfully!');
      // Reset the form fields
      formRef.current.reset();
    };

  return (
    <div>
       <div className='f-footer'>
        <Container>
            <Row className='footer-list'>
                <Col xs={3}>
                    {/* <div> */}
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
                    {/* </div> */}
                </Col>
                <Col xs={6}>

                    <form className='footer-fd' ref={formRef} onSubmit={handleSubmit}>
                        <h3 className='f-tag'>Add Credentials</h3>
                        <input className='f-inp' type='text' placeholder='Enter your Name' />  <br />
                        <input className='f-inp' type='email' placeholder='Enter Email' /> <br />
                        <Button className='f-btnn' type='submit' variant="success">Submit</Button>
                    </form>
                </Col>
            </Row>
        </Container>

        <div className='f-icons'>

        <a href='https://www.facebook.com/groups/FoodBloggers/'><i class="fa fa-facebook-official gk" > </i></a>
          <a href='https://www.indianhealthyrecipes.com/hyderabadi-biryani-recipe/' >  <i class="fa fa-google gk"  >  </i></a>
           <a href='https://www.instagram.com/explore/tags/biryani/?hl=en'> <i class="fa fa-instagram gk"  ></i></a>
            <a href='https://www.linkedin.com/pulse/topics/home/'><i class="fa fa-linkedin-square gk"  ></i></a>
            <a  href='https://in.pinterest.com/pin/1026187465075545007/'> <i class="fa fa-pinterest-square gk" ></i></a>
           <a href='https://twitter.com/Hashtag_biryani/status/1620021364177387525'> <i class="fa fa-twitter-square gk"  ></i></a>


            {/* <h2 className='f-last-tag'>HomeChef</h2> */}
        </div>

        <hr className='f-hr'/>
        <div className='f-copy'>
            <p>Copyright 2024 <i class="fa fa-copyright"></i> <i>Home🍽Chef .&nbsp;</i> All Rights Reserved. </p>
           
        </div>

    </div>
    </div>
  )
}

export default Footer
