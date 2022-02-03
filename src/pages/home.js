import React from 'react';
import { Image } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {useNav} from '../components/navbar/customHooks/useNav'
import '../pages/page.css'
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
    <Slider{...settings}>

    <Image src={require("../assets/image4.jpg")} style={{ width: '100%',  }}></Image>
    <Image src={require("../assets/image5.png")} style={{ width: '100%',  }}></Image>
    <Image src={require("../assets/image4.jpg")} style={{ width: '100%',}}></Image>
    </Slider>

    </section>
    
  );
}

