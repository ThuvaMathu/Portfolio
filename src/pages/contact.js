import React, {useState} from 'react';

import {useNav} from '../components/navbar/customHooks/useNav'
import '../pages/page.css'
import { Image, Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';





export default function Contact() {
  const contactRef = useNav('Contact');
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
	return (
		<section className='about-section' ref={contactRef} id='contactContainer'>
    <Container className='about-Container' >
      
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className='image-container'>
            <Image className="image-prop" src={require("../assets/image2.jpg")} ></Image>
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='image-container'>
            <Image className="image-prop" src={require("../assets/image4.jpg")} ></Image>
          </div>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='image-container'>
            <Image className="image-prop" src={require("../assets/image3.jpg")} ></Image>
          </div>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      

    {/* Cars section */}
    <div className="card-container">
    <Container>
      <Row className="">
        <Col className="col">
          <h3 className="gpd-header">Column content</h3>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Title</h5>
              <p className="card-text">
                Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non
                mi porta gravida at eget metus.
              </p>
              <a href="#" role="button" className="btn mr-3 btn-primary"> Button </a>
              <a href="#" className="card-link"> Link </a>
              <a href="#" className="card-link"> Another link
              </a>
            </div>

            <div className="card-body">
              <h5 className="card-title">Title</h5>
              <p className="card-text">
                Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non
                mi porta gravida at eget metus.
              </p>
              <a href="#" role="button" className="btn mr-3 btn-primary"> Button </a>
              <a href="#" className="card-link"> Link </a>
              <a href="#" className="card-link"> Another link
              </a>
            </div>
            
            <div className="card-footer">Footer</div>
          </div>
        </Col>

        <Col className="col">
          <h3 className="gpd-header">Column content</h3>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Title</h5>
              <p className="card-text">
                Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non
                mi porta gravida at eget metus.
              </p>
              <a href="#" role="button" className="btn mr-3 btn-primary"> Button </a>
              <a href="#" className="card-link"> Link </a>
              <a href="#" className="card-link"> Another link
              </a>
            </div>

            <div className="card-body">
              <h5 className="card-title">Title</h5>
              <p className="card-text">
                Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non
                mi porta gravida at eget metus.
              </p>
              <a href="#" role="button" className="btn mr-3 btn-primary"> Button </a>
              <a href="#" className="card-link"> Link </a>
              <a href="#" className="card-link"> Another link
              </a>
            </div>
            
            <div className="card-footer">Footer</div>
          </div>
        </Col>
      </Row>
      </Container>
      </div>
      </Container>
  </section>
    
  );
}

