import React from 'react';
import { Image } from 'react-bootstrap';

export default function Features() {
  return (
    <div>
      <div style={{display:'flex',justifyContent:'center'}}>
<h4 className='font-weight-bold bd-highlight text-uppercase'>About Us</h4>

      </div>
    <div className='card'>
      <div className='row no-gutters'>
        <div className='col-md-10 p-2'>
        Use the expand prop to allow for collapsing the Navbar at lower breakpoints.
Navbars and their contents are fluid by default. Use optional containers to limit their horizontal width.
Use spacing and flex utilities to size and position content
A responsive navigation header, including support for branding, navigation, and more. Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the lg (large) breakpoint.
        </div>
        <div className='col-md-2'>
        <Image src={require("../assets/home.jpg")} style={{width:'30',height:'150px'}}></Image>
      
        </div>
      </div>
    </div>
    </div>
    
  );
}

