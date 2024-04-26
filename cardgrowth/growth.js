import React,{useEffect} from 'react';

import './growth.css'




import Aos from "aos"
import 'aos/dist/aos.css'
import { faArrowRight, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Growth(){

    useEffect(()=>{
        Aos.init();
       },[])

  return (
   <>

<section className="destinations-area section-gap">
  <div className="container">	
    <div className="row d-flex justify-content-center">
      <div className="menu-content pt-4 col-lg-12">
        <div className="color-destinations text-center">
          <p className='small-size'>Prices are per month per project.</p>
          <span className='small-size' style={{ color: 'lightorange', border: '1px solid orange', padding: '5px' ,borderRadius: '200px'}}>
  <FontAwesomeIcon  icon={faAngleDoubleDown} style={{ color: '#FF4500' }}   className="arrow-icon"/> See all the features and compare plans
</span>
<br/><br/>
         
        <br/>
        
		<h1 className="text-dark-blue">Extend your <span className="bold-text">Growth</span> plan with <img
  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcROrZDnqrJzcRz_vf7H-u3OrGGgUqCLbKEj52denqfXGor95K_G"
  alt="Growth"
  className="growth-image"
  style={{ width: '80px', height: '60px' }}
/>
 Add-ons</h1>

        </div>
      </div>
    </div>      

    
                        
                     
                        
    <div className="row pt-4"  >
  <div className="col-lg-4">
  <div className="single-destinations">
      <div className="thumb">
        <img src="https://cdn.sanity.io/images/3do82whm/next/d289db5853fad05e979cebffc651b301b5218980-294x147.svg?w=384&q=75&fit=clip&auto=format" alt="" height="175px" />
      </div>
      <div className="details" >
      <ul className="package-list pl-1 pr-2" data-aos="zoom-out-right" data-aos-duration="2000">
          <li className="d-flex justify-content-between align-items-center">
            <span  style={{ color:'#BF77F6'}}>
            <img
  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcROrZDnqrJzcRz_vf7H-u3OrGGgUqCLbKEj52denqfXGor95K_G"
  alt="Growth"
  className="growth-image"
  style={{ width: '30px', height: '30px' }}
/>Add-on</span>
            <span>+ $1399 per month</span>
          </li>
          </ul>
        <h5>SAML single sign-on (SSO)</h5>
       
        <p>Simplify project access using a third-party identity provider like Okta, Google, or Azure Active Directory.</p>
        <ul className="package-list pl-1 pr-2">
          
          <div className="container1">
  <span className="or-text"> <span className='bl'>Readmore</span></span>
  <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
</div>
<li className="d-flex justify-content-between align-items-center">
              <a 
  href="#" 
  className="price-btn" 
  style={{ 
    border: "2px solid grey", 
    textAlign: "center", 
    backgroundColor: "white", 
    color: "black", 
    padding: "5px 10px", 
    borderRadius: "5px", 
    width: "100%",
    transition: "background-color 0.3s", // Smooth transition effect
    textDecoration: "none" // Remove underline from link
  }}
  onMouseEnter={(e) => e.target.style.backgroundColor = "lightgrey"} // Change background color on hover
  onMouseLeave={(e) => e.target.style.backgroundColor = "white"} // Restore original background color on mouse leave
>
 Addd to project
</a>

        </li>		
        </ul>
      </div>
    </div>
  </div>

  <div className="col-lg-4">
    <div className="single-destinations">
      <div className="thumb">
        <img src="https://cdn.sanity.io/images/3do82whm/next/6d4db06f802b92d750fa401b4068a4420bdb528b-294x147.svg?w=384&q=75&fit=clip&auto=format" alt="" height="175px" />
      </div>
      <div className="details" >
      <ul className="package-list pl-1 pr-2"data-aos="zoom-out-right" data-aos-duration="2000">
          <li className="d-flex justify-content-between align-items-center">
            <span  style={{ color:'#BF77F6'}}>
            <img
  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcROrZDnqrJzcRz_vf7H-u3OrGGgUqCLbKEj52denqfXGor95K_G"
  alt="Growth"
  className="growth-image"
  style={{ width: '30px', height: '30px' }}
/>Add-on</span>
            <span>+ $799 per month</span>
          </li>
          </ul>
        <h5>Dedicated Support</h5>
       
        <p>Get direct technical support from Sanity's Support Engineers. additional datasets for your project.</p>
        <ul className="package-list pl-1 pr-2">
          
          <div className="container1">
  <span className="or-text"> <span className='bl'>Readmore</span></span>
  <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
</div>
<li className="d-flex justify-content-between align-items-center">
              <a 
  href="#" 
  className="price-btn" 
  style={{ 
    border: "2px solid grey", 
    textAlign: "center", 
    backgroundColor: "white", 
    color: "black", 
    padding: "5px 10px", 
    borderRadius: "5px", 
    width: "100%",
    transition: "background-color 0.3s", // Smooth transition effect
    textDecoration: "none" // Remove underline from link
  }}
  onMouseEnter={(e) => e.target.style.backgroundColor = "lightgrey"} // Change background color on hover
  onMouseLeave={(e) => e.target.style.backgroundColor = "white"} // Restore original background color on mouse leave
>
 Addd to project
</a>

        </li>		
        </ul>
      </div>
    </div>
  </div>

  <div className="col-lg-4" >
    <div className="single-destinations">
      <div className="thumb">
        <img src="https://cdn.sanity.io/images/3do82whm/next/2aecc185422e53fedc050e28e7c3a435166d1711-294x147.svg?w=384&q=75&fit=clip&auto=format" height="175px" alt="" />
      </div>
      <div className="details" >
      <ul className="package-list pl-1 pr-2"data-aos="zoom-out-right" data-aos-duration="2000">
          <li className="d-flex justify-content-between align-items-center">
            <span  style={{ color:'#BF77F6'}}>
            <img
  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcROrZDnqrJzcRz_vf7H-u3OrGGgUqCLbKEj52denqfXGor95K_G"
  alt="Growth"
  className="growth-image"
  style={{ width: '30px', height: '30px' }}
/>Add-on</span>
            <span>+ $299 per month</span>
          </li>
          </ul>
        <h5>Increased quota</h5>
       
        <p>Extend the included quotas to 50k documents,  500GB bandwidth, and 500GB assets.</p>
        <ul className="package-list pl-1 pr-2">
          
          <div className="container1">
  <span className="or-text"> <span className='bl'>Readmore</span></span>
  <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
</div>
<li className="d-flex justify-content-between align-items-center" >
              <a 
  href="#" 
  className="price-btn" 
  style={{ 
    border: "2px solid grey", 
    textAlign: "center", 
    backgroundColor: "white", 
    color: "black", 
    padding: "5px 10px", 
    borderRadius: "5px", 
    width: "100%",
    transition: "background-color 0.3s", // Smooth transition effect
    textDecoration: "none" // Remove underline from link
  }}
  onMouseEnter={(e) => e.target.style.backgroundColor = "lightgrey"} // Change background color on hover
  onMouseLeave={(e) => e.target.style.backgroundColor = "white"} // Restore original background color on mouse leave
>
 Addd to project
</a>

        </li>		
        </ul>
      </div>
    </div>
  </div>
  

  

</div>
  
  </div>	
  <div className="menu-content pt-4 col-lg-12 col-mb-4">
  <div className="color-destinations text-center">
  <span className='small-size'>TRUSTED BY LEADING DIGITAL INNOVATORS</span><br/><br/>
  <img src="https://www.helpdesk.com/images/logos-desktop.png" className="responsive-image" alt="Trusted Digital Innovators" />
</div>

</div>

</section>
	
   
   </>
  )
}