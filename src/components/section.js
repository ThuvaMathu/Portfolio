import React from 'react';
import Navbars from './navbar';
import Home from './home';
import Price from './price';
import Features from './features';
export default function Section() {
  return (
    <div className='home'>
        <div>
            <section id='home'>
                <Navbars></Navbars>
                <Home></Home>
            </section>
          
            <section id='features'>
                
                <Features></Features>
            </section>
            <section id='prices'>
                
                <Price></Price>
            </section>
        </div>
    </div>
    
  );
}

