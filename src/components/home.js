import React from 'react';
import { Image } from 'react-bootstrap';

export default function Home() {
  return (
    <>
<Image src={require("../assets/home.jpg")} style={{width:'100%',height:'700px'}}></Image>
    </>
    
  );
}

