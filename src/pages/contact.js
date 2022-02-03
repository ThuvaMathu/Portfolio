import React from 'react';
import {useNav} from '../components/navbar/customHooks/useNav'
import '../pages/page.css'

export default function Contact() {
  const contactRef = useNav('Contact');

	return (
		<section ref={contactRef} id='contactContainer'>
    <div style={{display:'flex',justifyContent:'center'}}>
<h4 className='font-weight-bold bd-highlight text-uppercase'>About Us</h4>

    </div>
  <div className='card'>
    <div className='row no-gutters'>
      <div className='col-md-12 p-2'>
      The react-router-dom package contains bindings for using React Router in web applications. Please see the Getting Started guide for more information on how to get started with React Router.
A responsive navigation header, including support for branding, navigation, and more. Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the lg (large) breakpoint.
      </div>
     
    </div>
  </div>
  </section>
    
  );
}

