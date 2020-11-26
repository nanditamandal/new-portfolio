import React from 'react';
import { Button, Container, Form, FormControl, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    
    return (
        <Container className="nav-bar">
        <Navbar expand="lg">
        <Navbar.Brand href="#Home"><span>Nandita</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#Home"><span>Home</span></Nav.Link>
            <Nav.Link href="#Projects"><span>Projects</span></Nav.Link>
            <Nav.Link href="#Blogs"><span>Blogs</span></Nav.Link>
            <Nav.Link href="#Contact"><span>Contact</span></Nav.Link>
          </Nav>
          <Form inline>
            <Button variant="outline-success">
            <a href="https://drive.google.com/file/d/1SKPtRZH-LAxhCUD_dSV-vZYMkoYyDo1U/view?usp=sharing" target='_blank'><span>Resume</span></a>
           
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      </Container>
    );
};

export default Header;