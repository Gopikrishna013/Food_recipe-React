import React from 'react'
import '../Style/Navbar.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
// import Caro1 from '../uploads/img.avif'
// import Caro2 from '../uploads/img.avif'
// import Caro3 from '../uploads/img.avif'

// import Caro2 from './pic1.jpg'
// import Caro3 from './pic3.jpg'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>

      {/* <h1>Gopikrishna</h1> */}
      <Navbar bg="" data-bs-theme="" className='nav-list'>
        <Container className='f-navbar'>
          <Navbar.Brand className='f-logo' id='ff-list' href="#">Home 🍽 Chef</Navbar.Brand>
          <Nav className="F-Nav me-auto mx-5">
            <Nav.Link as={Link} to='/' id='f-list'  >Home</Nav.Link>
            <Nav.Link as={Link} to='/Loginpage' id='f-list'  >Recipe</Nav.Link>
            <Nav.Link as={Link} to='/Feed' id='f-list' href="#"  >Feedback</Nav.Link>
            <Nav.Link as={Link} to='/Loginpage' className='f-list' href="#"  ><i class="fa fa-user-o"></i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}


    </div>
  )
}

export default Header