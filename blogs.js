import React, {useState,useEffect} from 'react';
import '../../css/about.css';
import '../../css/blog.css';
import bg from '../../images/1.jpg';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from'axios';

function Blogs() {

    const [data,setData] = useState([]);
    const [img,setImg] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/codefox/wordpress-5.5/wordpress/wp-json/wp/v2/posts')
        .then(posts => {
            setData(posts.data);
        })
    },[]);
    
    const getImage = ((image_id) => {
        if(!(image_id === 0)){
            axios.get(`http://localhost:8080/codefox/wordpress-5.5/wordpress/wp-json/wp/v2/media/${image_id}`)
            .then(img => {
                // setImg(img.data.guid.rendered);
                // console.log(setImg);
            })
        }
    });
    
    const getUser = ((user_id) => {
        // axios.get(`http://localhost:8080/codefox/wordpress-5.5/wordpress/wp-json/wp/v2/users/${user_id}`)
        // .then(user => {
        //     console.log(user.data.name);
        //     return "a";
        // })
        return "a";
    })

    return(
        <div>
            <section>
                <div className="back-image"></div>
                <div className="content-wrapper">
                    <div className="section-header">
                        <h2>Blogs</h2>
                        <ul className="list">
                            <li className="active">
                                <Link to="/Blogs">All</Link>
                            </li>
                            <li>
                                <Link to="#">JavaScript</Link>
                            </li>
                            <li>
                                <Link to="#">Java</Link>
                            </li>
                            <li>
                                <Link to="#">C++</Link>
                            </li>
                            <li>
                                <Link to="#">R</Link>
                            </li>
                        </ul>
                    </div>
                    <Container fluid> 
                        <Row> 
                        {data.map(post => {
                            var image = getImage(post.featured_media);
                            var name = getUser(post.author);
                            // console.log(name);
                            // var descp = post.excerpt.rendered;
                            // var image_id = getImage(post.featured_media);
                            // console.log(image_id);
                            // getImage(image_id);
                            // console.log(image_id)
                            // console.log(post.categories)
                            return(
                                <Col lg={4} xs={12} md={6} className="blog-col"  key={post.id}>   
                                    <Card className="blog-card" >
                                        <Link to={ "/Blogs/BlogContent/" + post.id }>
                                            <Card.Img variant="top" src={img} className="blog-card-image"  />
                                        </Link>
                                        <Card.Body className="blog-card-body" >
                                            <Card.Text className="blog-card-text" >
                                                <Link to={ "/Blogs/BlogContent/" + post.id }>
                                                    <span className="blog-card-title"  dangerouslySetInnerHTML ={{__html: post.title.rendered}} />
                                                </Link>
                                                <span dangerouslySetInnerHTML ={{__html: post.excerpt.rendered}} />
                                            </Card.Text>
                                            <Card.Text>
                                                <Link to={ "/BlogContent/" + post.id }  className="blog-category" >{name}</Link>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                        }
                        </Row>
                    </Container>
                    {/* <Container fluid>
                        <Row> 
                            <Col lg={4} xs={12} style={{paddingBottom: '2rem'}}>   
                                <Card style={{ width: '360px' }}>
                                    <Link to="/Blogs/BlogContent">
                                        <Card.Img variant="top" src={bg} style={{ height: '200px' }} />
                                    </Link>
                                    <Card.Body style={{ padding: '2rem' }}>
                                        <Card.Text style={{ marginBottom: '1.5rem' }}>
                                            <Link to="/BlogContent">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            </Link>
                                        </Card.Text>
                                        <Card.Text>
                                            <Link to="/BlogContent" style={{ fontWeight: 'bold', color:'green' }}>Topic</Link>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                           
                        </Row>
                    </Container> */}
                </div>
            </section>
        </div>
    );
};

export default Blogs;
