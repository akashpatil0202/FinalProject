import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Accordion, Alert, Badge, Carousel, Col, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import './myStyles.css'
import wk1 from './Images/workout1.webp'
import wk2 from './Images/workout2.jfif'
import wk3 from './Images/workout3.jfif'
import wk4 from './Images/workout4.jpg'
import wk5 from './Images/workout5.jpg'
import wk6 from './Images/workout6.jpg'
import hl1 from './Images/hl1.jpg'
import hl2 from './Images/hl2.jpg'
import hl3 from './Images/hl3.jpg'
import HomeSubComponent from './HomeSubComponent';
import { Link, Outlet, Route, Router } from 'react-router-dom';
import navbar from './Navbar';
import {Clock} from "grommet"


function HomePage() {



  const isStatus=false;
  return (
  <>

    {/* <Navbar className={navbar ? 'navbar active':'navbar'} bg="light" expand="lg"> */}
    <Navbar className= 'navbar active' bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="" className='heading'>SmartAndFit.com</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link className='margin' href="#action1"><Link to='/home' className='routing'>Home</Link></Nav.Link>
         
          <NavDropdown title="Login/Register" id="navbarScrollingDropdown">
            <NavDropdown.Item>
            <Link to="/owner" className='routing'>Owner</Link> </NavDropdown.Item>
            <NavDropdown.Item > <Link to="/trainer" className='routing'>Trainer</Link></NavDropdown.Item>
            
            <NavDropdown.Item> <Link to='/trainee' className='routing'>Trainee</Link></NavDropdown.Item>
          </NavDropdown>
          <Nav.Link><Link to='/caloriecounter' className='routing'> Calorie Counter</Link></Nav.Link>
          <Nav.Link><Link to='bmicalculator' className='routing'>BMI Calculator</Link></Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
 
  <Outlet>
<HomeSubComponent/> 
</Outlet>
 
</>
  );
}

export default HomePage;