import React from 'react';
import creative from '../../images/creative.png';
import volunteer from '../../images/volunteer.png';
import travel from '../../images/travel.png';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import Header from '../Home/Header/Header';
import { Button } from 'bootstrap';
import Card from 'react-bootstrap/Card';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';


const projects=[
    {
        id:1,
        name: "Creative Agency",
        details: "A fullstack app using React.js, Nose js, MongoDB, Bootstrap 4, google authenticator, API",
        img:creative,
        github: "https://github.com/nanditamandal/creative-agency-client",
        LiveLink: "https://creative-agency-1b7d2.web.app/"
    },
    {
        id:2,
        name: "Volunteer Network",
        details: "A fullstack app , user can select their Volunteer items. It user React.js, Nose js, MongoDB, Bootstrap 4, firebase authentication , API",
        img:volunteer,
        github: "https://github.com/nanditamandal/volunteer-network",
        LiveLink: "https://volunteernetwork-74cf1.web.app/"
    },
    {
        id:3,
        name: "travel Guru",
        details: "User can select their hotels and see the map. To make this using tools are react js, bootstrap, google map, firebase authentication, API",
        img:travel,
        github: "https://github.com/nanditamandal/travel-guru",
        LiveLink: "https://travel-guru-e9437.web.app/"
    }
]

const Projects = () => {
    return (
        <div className="container my-5 projects">
            <div className="row">
                {
                    projects.map(project => 
                        <div className="col-md-4">
                        
                        <Card style={{ height: '30rem' }} >
                            <Card.Img variant="top" src={project.img} style={{ height: '200px' }} />
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>
                                {project.details}
                                </Card.Text>
                                <Card.Footer>
                                <a href={project.github} target="_brand"><FontAwesomeIcon icon={faGithub} size="3x"/></a>
                                <a href={project.LiveLink} target="_brand"><FontAwesomeIcon icon={faExternalLinkAlt} size="3x"/></a>
                            
                                </Card.Footer>
                            
                            </Card.Body>
                        </Card>
                        </div>
                    )

                } 
            </div>
        </div>
    

    );
};

export default Projects;