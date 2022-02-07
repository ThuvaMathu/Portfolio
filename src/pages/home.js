import React from 'react';
import {useNav} from '../components/navbar/customHooks/useNav'
import '../pages/page.css'
import 'bootstrap/dist/css/bootstrap.css';
import {Container,Row,Col, Image} from 'react-bootstrap';



export default function Home() {
  const settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const homeRef = useNav('Home');
  return (
    <section ref={homeRef} id='homeContainer'>
      <div>
        <Container className='home-container' >
          <Row>
            <Col sm={6} className='title-container'>
              <div >
                <h3 className='title-head1' id="Heading3">Hi, My name is</h3>
              </div>
              <div >
                <h1 className='title-head' id="Heading4">Belldanti</h1>
              </div>
              <div>
                <span>
                  <h2 className='title-dis'>UI/UX Developer</h2>
                </span>
              </div>
            </Col>
            <Col sm={6} className='content-allign'>
            
            <Image className='newimage' src={require("../assets/sample.jpg")} ></Image>
            
            </Col>
        </Row>
        
      </Container>
      </div>
    </section>
    
  );
}

