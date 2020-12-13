import React from 'react';
import js from '../../images/js.png';
import jsCode from '../../images/jscode.jpg';
import react from '../../images/react.jpg';
import Card from 'react-bootstrap/Card';
import { Button } from 'bootstrap';

const blogs=[
    {
        id:1,
        name: "JavaScript Code Style",
        img:jsCode,
        link: 'https://nanditamandal.medium.com/javascript-code-style-dbbbc14a793e'
    },
    {
        id:2,
        name: "React Basic",
        img:react,
        link: 'https://nanditamandal.medium.com/react-basic-5ee530053ee9'
    },
    {
        id:3,
        name: "javaScript Basic",
        img:js,
        link: 'https://nanditamandal.medium.com/javascript-2f93064c19b'
    }
]


const Blog = () => {
    return (
        <div className="container my-5 projects">
            <h2 style={{text: "center"}}> Blogs </h2>
            <div className="row pt-5">
                {
                    blogs.map(blog => 
                        <div className="col-md-4">
                        
                        <Card style={{ height: '30rem' }} >
                            <Card.Img variant="top" src={blog.img} style={{ height: '200px' }} />
                            <Card.Body>
                                <Card.Title>{blog.name}</Card.Title>
                                <br/>
                                    
                                <a href={blog.link} target="_brand" className="btn btn-primary btn-block">Read More...</a>
                                
                            
                            </Card.Body>
                        </Card>
                        </div>
                    )

                } 
            </div>
        </div>
    );
};

export default Blog;