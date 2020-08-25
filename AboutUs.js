import React from 'react';
import '../../css/about.css';
import bg from '../../images/1.jpg';
import { Image, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function About() {
    return(
        <div>
        <section className="back-image"></section>
        <div style={{backgroundColor:"floralwhite"}}>
            <div className="categories">
                <h1 >About Us</h1>
                <p className="aboutus">"One stop solution for all your programming needs."</p>
                <p className="content" id="team">
                    We as a group of students from NIT Trichy started this poroject as to share the knowledge
                    with you in a more natural way, not from a tutor to student but from a friend to a friend 
                    prespective. That's why we will try our best to deliver quality content in an innovative
                    manner. 
                    Along the way, we try to inspire you to learn programming skills.    
                </p>
                <hr />
                <h2>Team Members</h2>
                <Container>
                    <Row>
                      <Col lg={6}  xs={12} > 
                        <div className="team">
                            <div className="border-extension">
                                <Image src={bg} className="img" roundedCircle />
                            </div>
                            <h2>Koshal Agrawal</h2>
                            <h4>Web Developer</h4>
                            <div className="hide">
                                <ul className="same-line">
                                    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="fa-lg"/></a></li>
                                    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} className="fa-lg"/></a></li>
                                    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="fa-lg"/></a></li>
                                    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className="fa-lg"/></a></li>
                                    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="fa-lg"/></a></li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                        <Col lg={6}  xs={12} > 
                        <div className="team">
                            <div className="border-extension">
                                <Image src={bg} className="img" roundedCircle />
                            </div>
                            <h2>Yash Tyagi</h2>
                            <h4>&nbsp;Web Developer</h4>
                            <div className="hide">
                                <ul className="same-line">
                                    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="fa-lg"/></a></li>
                                    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} className="fa-lg"/></a></li>
                                    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="fa-lg"/></a></li>
                                    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className="fa-lg"/></a></li>
                                    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="fa-lg"/></a></li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                        <Col lg={6}  xs={12} > 
                        <div className="team">
                            <div className="border-extension">
                                <Image src={bg} className="img" roundedCircle />
                            </div>
                            <h2>Chirag Verma</h2>
                            <h4>Designer</h4>
                            <div className="hide">
                                <ul className="same-line">
                                    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="fa-lg"/></a></li>
                                    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} className="fa-lg"/></a></li>
                                    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="fa-lg"/></a></li>
                                    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className="fa-lg"/></a></li>
                                    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="fa-lg"/></a></li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                        <Col lg={6}  xs={12} > 
                        <div className="team">
                            <div className="border-extension">
                                <Image src={bg} className="img" roundedCircle />
                            </div>
                            <h2>Shubham Kadam</h2>
                            <h4>Manager</h4>
                            <div className="hide">
                                <ul className="same-line">
                                    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="fa-lg"/></a></li>
                                    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} className="fa-lg"/></a></li>
                                    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="fa-lg"/></a></li>
                                    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className="fa-lg"/></a></li>
                                    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="fa-lg"/></a></li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        
                    </Row>
                </Container>
            </div>
            </div>
        </div>
    );
}

export default About;    
