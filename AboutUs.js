import React from 'react';
import '../../css/about.css';
import bg from '../../images/1.jpg';
import { Card, Image, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram, faTwitter, faLinkedin  } from '@fortawesome/free-brands-svg-icons';

function About() {
    return(
        <div>
        <section className="back-image"></section>
            <div className="categories">
                <h1>About Us</h1>
                <Container>
                    <Row>
                        <Col>
                        <div className="aboutus">
                            <Image src={bg} className="img" roundedCircle />
                            <h2>Koshal Agrawal</h2>
                            <h4>Web Developer</h4>
                            <div className="hide">
                                <Card.Link href="google.com"><FontAwesomeIcon icon={faInstagram} /></Card.Link>
                                <Card.Link href="google.com"><FontAwesomeIcon icon={faFacebook} /></Card.Link>
                                <Card.Link href="google.com"><FontAwesomeIcon icon={faTwitter} /></Card.Link>
                                <Card.Link href="google.com"><FontAwesomeIcon icon={faLinkedin} /></Card.Link>
                                <Card.Link href="google.com"><FontAwesomeIcon icon={faGithub} /></Card.Link>
                            </div>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default About;    