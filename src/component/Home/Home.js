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
           <div id="nav-bar">
                <Header></Header>
           </div>
            <div className="section-height" id="Home">
                <HomeBody ></HomeBody>
            </div>
            
            <div className="section-height" id="Projects">
                <Projects ></Projects>
            </div>
            <section className="section-height" id="Blogs">
                <Blog ></Blog>
            </section>
            <section className="section-height" id="Contact">
              <Contact ></Contact>
            </section>
        </div>
            
    );
};

export default Home;