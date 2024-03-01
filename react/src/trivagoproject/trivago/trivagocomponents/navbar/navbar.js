// import React, { useRef } from "react";
// import { Container, Row, Col } from "reactstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faLanguage, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

// import "./navbars.css";

// const navLinks = [
//   {
//     display: "Favorites",
//     url: "#",
//     icon:<FontAwesomeIcon icon={faHeart} /> 
//   },
//   {
//     display: "Languages",
//     url: "#a",
//     icon:<FontAwesomeIcon icon={faLanguage} />
//   },
//   {
//     display: "Login",
//     url: "#c",
//     icon:<FontAwesomeIcon icon={faUser} />
//   },
//   {
//     display: "Hotels",
//     url: "#choose",
//   },
// ];

// export const Navbar = () => {
//   const menuRef = useRef();

//   const menuToggle = () => menuRef.current.classList.toggle("active__menu");

//   return (
//     <header className="header">
//       <Container>
//         <Row className="navigation align-items-center justify-content-between">
//           <Col xs={6}>
//             <div className="logo">
//               <h2 className=" d-flex align-items-center gap-1">
//                 <i className="ri-pantone-line"></i> <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Trivago.svg/2560px-Trivago.svg.png' width='100px' height='50px' alt='TRIVAGO BOOKING' />
//               </h2>
//             </div>
//           </Col>

//           <Col xs={6} className="text-end">
//             <div className="mobile__menu">
//               <span>
//                 <FontAwesomeIcon icon={faBars} onClick={menuToggle} />
//               </span>
//             </div>
//           </Col>

//           <Col xs={12} className="mt-3">
//             <div className="nav__menu" ref={menuRef}>
//               <ul className="nav__list">
//                 {navLinks.map((item, index) => (
//                   <li key={index} className="nav__item">
//                     <a href={item.url}>
//                       {item.icon} {item.display}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </header>
//   );
// };
import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLanguage, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import "./navbars.css";
import { useTranslation } from 'react-i18next';

const navLinks = [
  {
    display: "Favorites",
    url: "#",
    icon:<FontAwesomeIcon icon={faHeart} /> 
  },
 
  {
    display: "Login",
    url: "login",
    icon:<FontAwesomeIcon icon={faUser} />
  },
  
    { display: "Hotel", id: "hotel" ,url:"/combinedhotel"}
  
];

export const Navbar = () => {
  const menuRef = useRef();
  const [showLanguages, setShowLanguages] = useState(false);
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  const handleLanguagesClick = () => {
    setShowLanguages(!showLanguages);
  };
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <header className="header">
     
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> 
              <a href="/"><img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Trivago.svg/2560px-Trivago.svg.png' width='100px' height='50px' alt='TRIVAGO BOOKING' /></a>
            </h2>
          </div>
         
          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i class="ri-phone-line"></i>{t('email')}
              </p>
            </div>
            <div className="nav__right">
        
            <select onChange={(e) => handleChangeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="ta">tamil</option>
        <option value="sp">Spanish</option>
  
      </select>

            </div>
          </div>

          <div className="mobile__menu">
          <span>
                <FontAwesomeIcon icon={faBars} onClick={menuToggle} />
              </span>
          </div>
        </div>
      </Container>
     
      
   
    </header>
  );
};