import React from 'react';
import { Image, Container, Row, Col, Carousel } from 'react-bootstrap';
import { useNav } from '../components/navbar/customHooks/useNav'
import '../pages/page.css'
import 'bootstrap/dist/css/bootstrap.css';



export default function About() {
  const aboutRef = useNav('About');




  return (
    <section ref={aboutRef} id='aboutContainer' className='about-section'>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h4 className='font-weight-bold bd-highlight text-uppercase' style={{fontSize: '30px', fontFamily:"fantasy"}}>About Us</h4>

      </div>
      <Container className='about-Container'>
        <Row className="">
          <Col md={6} className="col">
            <h3 className="gpd-header">Column content</h3>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Title</h5>
                <p className="card-text">
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non
                  mi porta gravida at eget metus.
                </p>

                <a href="#" className="card-link"> Link </a>
                <a href="#" className="card-link"> Another link
                </a>

                <hr />

                <h5 className="card-title">Title</h5>
                <p className="card-text">
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non
                  mi porta gravida at eget metus.
                </p>

                <a href="#" className="card-link"> Link </a>
                <a href="#" className="card-link"> Another link
                </a>
              </div>
              <hr />
              <div className="card-footer">Footer</div>
            </div>
          </Col>

          <Col md={6} className="col">
            <h3 className="gpd-header">Column content</h3>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Title</h5>
                <p className="card-text">
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non
                  mi porta gravida at eget metus.
                </p>

                <a href="#" className="card-link"> Link </a>
                <a href="#" className="card-link"> Another link
                </a>

                <hr />

                <h5 className="card-title">Title</h5>
                <p className="card-text">
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non
                  mi porta gravida at eget metus. my name in the
                  iabdofiuboi ibdoiasb lidbocvai oluidfbowiey8alksjdv b iouubfoib
                  We???re coding for mobile first so we assume the user is using a small screen.
                  That???s why the cards take up a whole row each (one column).
                  Now let???s make the cards responsive for larger screen sizes.
                  Is the screen larger than 600 pixels? Make it two columns.
                </p>

                <a href="#" className="card-link"> Link </a>
                <a href="#" className="card-link"> Another link
                </a>
              </div>
              <hr />
              <div className="card-footer">Footer</div>
            </div>
          </Col>
        </Row>
      </Container>




    </section>

  );
}

