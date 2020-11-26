import React from 'react';
import Header from './Header/Header';
import HomeBody from './HomeBody/HomeBody';
import Projects from '../Projects/Projects';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import { faDivide } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Header></Header>
            
            <div  id="Home">
                <HomeBody ></HomeBody>
            </div>
            
            <section id="Projects">
                <Projects ></Projects>
            </section>
            <section id="Blogs">
            <Blog ></Blog>
            </section>
            <section id="Contact">
            <Contact ></Contact>
            </section>
        </div>
            
    );
};

export default Home;