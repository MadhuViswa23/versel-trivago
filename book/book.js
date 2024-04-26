
import React,{useEffect} from 'react';

import './book.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Aos from "aos"
import 'aos/dist/aos.css'


export default function Book(){

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
		<h1 className=" place text-dark-blue" >Plans that scale with you</h1>
       
        </div>
      </div>
    </div>      

    <div className="row pt-4">
      <div className="col-lg-4 ">
        <div className="single-destinations">
         
          <div className="details">
          <h5 style={{fontWeight: 'bold'}}>Free</h5>
            <p> For individuals experimenting or shipping smaller projects.</p>
            <ul className="package-list pl-1 pr-2">
              <li className="d-flex justify-content-between align-items-center">
              <span>
  $ <span style={{ fontSize: '60px', height:'40px' }}>0</span>forever
</span>


               
              </li>
             
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
  Get started for free
</a>

        </li>		
        
        										
            </ul>
            <br/>
            
          </div>
          <div className="details">
            <h5>Includes:</h5>
                      
            <div>
      <span> <FontAwesomeIcon icon={faCheck} />20 user seats</span><br/><br/>
      <span> <FontAwesomeIcon icon={faCheck} /> 2 permission roles</span><br/><br/>
            
      <span> <FontAwesomeIcon icon={faCheck} />2 datasets (public only)</span><br/><br/>
      <span> <FontAwesomeIcon icon={faCheck} />Unlimited content types and locales</span><br/><br/>
      <span> <FontAwesomeIcon icon={faCheck} />Customizable content workspaces</span><br/><br/>
      <span> <FontAwesomeIcon icon={faCheck} /> Hosted, real-time content database</span><br/><br/>
      <span> <FontAwesomeIcon icon={faCheck} /> Live previews and visual editing tools and performance</span><br/><br/>
    
    </div>
            
            
          </div>
          
        </div>
      </div>

      <div className="col-lg-4" >
        <div className="single-destinations2">
          
          <div className="details">
          <h5 style={{fontWeight: 'bold'}}>Growth</h5>
            <p> For teams with scaling projects and increasing collaboration needs.</p>
            <ul className="package-list pl-1 pr-2">
              <li className="d-flex justify-content-between align-items-center">
              <span>
  $ <span style={{ fontSize: '60px', height:'40px', color:'black' }}>15</span>
per seat / month
</span>


              </li>
             
													
        <li className=" second d-flex justify-content-between align-items-center">
              <a 
  href="#" 
  className="price-btn" 
  style={{ 
    border: "2px solid grey", 
    textAlign: "center", 
    backgroundColor: "black", 
    color: "white", 
    padding: "5px 10px", 
    borderRadius: "5px", 
    width: "100%",
    transition: "background-color 0.3s, color 0.3s", // Smooth transition effect for background-color and color
    textDecoration: "none" // Remove underline from link
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "black"; // Change background color on hover
    e.target.style.color = "#ADD8E6"; // Change text color on hover
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "black"; // Restore original background color on mouse leave
    e.target.style.color = "white"; // Restore original text color on mouse leave
  }}
>
Try for free
</a>

</li>		

        										
        </ul>
        <div className="container1">
  <span className="or-text">or <span className='bl'>Buy now</span></span>
  <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
</div>
        
        
      </div>
      <div className="details">
        <h5>Everything in Free, and:</h5>
                  
        <div>
  <span> <FontAwesomeIcon icon={faCheck}style={{ color: '#663399' }}  />Up to 50 user seats</span><br/><br/>
  <span> <FontAwesomeIcon icon={faCheck} style={{ color: '#663399' }} /> 5 permission roles</span><br/><br/>
        
  <span> <FontAwesomeIcon icon={faCheck} style={{ color: '#663399' }} />2 datasets (public only)</span><br/><br/>
  <span> <FontAwesomeIcon icon={faCheck}style={{ color: '#663399' }}  />AI Assist</span><br/><br/>
  <span> <FontAwesomeIcon icon={faCheck} style={{ color: '#663399' }} />Comments and task management</span><br/><br/>
  <span> <FontAwesomeIcon icon={faCheck} style={{ color: '#663399' }} /> Scheduled publishing</span><br/><br/>
  <span> <FontAwesomeIcon icon={faCheck}style={{ color: '#663399' }}  /> Pay-as-you-go for higher usage and management</span><br/><br/>

</div>
        
        
      </div>
      
    </div>
  </div>

  <div className="col-lg-4" >
        <div className="single-destinations2"  style={{ border: "2px solid red" }}>
          
        <div className="details">
          <h5 style={{fontWeight: 'bold'}}>Enterprise</h5>
            <p> For organizations with complex security, support,performance needs.</p>
            <ul className="package-list pl-1 pr-2">
              <li className="d-flex justify-content-between align-items-center">
              <span>
   <span style={{ fontSize: '60px', height:'40px', backgroundColor:'white'}}> <span><FontAwesomeIcon icon={faCommentAlt} /> </span></span>Custom pricing
</span>


              </li>
             
													
              <li className="d-flex justify-content-between align-items-center">
              <a 
  href="#" 
  className="price-btn" 
  style={{ 
    border: "2px solid #ff7b7b", 
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
  Contact sales
</a>

        </li>	

        										
        </ul>
       
        <div className="container2">
  <span className="or-text">or <span className='bl'>Request a demo</span></span>
  <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
</div>
  
        
      </div>
      <div className="details">
        <h5>Everything in Growth, and:</h5>
             
        <div>
  <span> <FontAwesomeIcon icon={faCheck}style={{ color: '#FF4500' }}  />Custom # user seats</span><br/><br/>
  <span> <FontAwesomeIcon icon={faCheck} /> Custom roles and access control</span><br/><br/>
  
 
  <span> <FontAwesomeIcon icon={faCheck}style={{ color: '#FF4500' }}  />Custom # datasets</span><br/><br/>
  <span> <FontAwesomeIcon icon={faCheck} style={{ color: '#FF4500' }} />Single sign-on with SAML</span><br/><br/>
  <span> <FontAwesomeIcon icon={faCheck} style={{ color: '#FF4500' }} />Single sign-on with SAML</span><br/><br/>

  <span> <FontAwesomeIcon icon={faCheck} style={{ color: '#FF4500' }} /> Dedicated support and uptime SLA</span><br/><br/>
  <span> <FontAwesomeIcon icon={faCheck}style={{ color: '#FF4500' }}  /> Custom usage quota and Custom historical retention</span><br/><br/>

</div>
        
        
      </div>
      
      
    </div>
  </div>

     
  
 
                     
                       
                    
    </div>
   
  </div>	
</section>
	
   
   </>
  )
}

