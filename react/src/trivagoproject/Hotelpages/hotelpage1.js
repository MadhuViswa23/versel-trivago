import React from "react";
import "./hotelpage.css"
import { Navbar } from "../trivago/trivagocomponents/navbar/navbar";
import { Header } from "../trivago/trivagocomponents/header/header";
import Maillist from "../trivago/trivagocomponents/maillist/maillist";
import Footer from "../trivago/trivagocomponents/footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { colors } from "@mui/material";

export default function Hotel1(){
    const [getdata, setGetdata] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3006/get')
        .then((res) => res.json())
        .then((data) => {
          console.log(data); 
          setGetdata(data);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
  
    const photos = [
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
      },
    ];
  
    const handleOpen = (i) => {
      setSlideNumber(i);
      setOpen(true);
    };
  
    const handleMove = (direction) => {
      let newSlideNumber;
  
      if (direction === "l") {
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
      } else {
        newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
      }
  
      setSlideNumber(newSlideNumber)
    };





    return(
        <>
       <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
      <div className="hotelWrapper">
  {getdata
    .filter((item) => item.id === 1) 
    .map((item, index) => (
      <div key={index}>
         <button className="bookNow"> <Link to="/book/1" className="button" > Reserve or Book Now!</Link></button>
        {/* <button  className="bookNow">
            <Link to="/book/1" > Reserve or Book Now!</Link>
            </button> */}
            
        <h1 className="hotelTitle">{item.hotelname}</h1>
        <div className="hotelAddress">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>{item.place}</span>
        </div>
        <span className="hotelDistance">
          Excellent location – 500m from center
        </span>
        <span className="hotelPriceHighlight">
          Book a stay over {item.rent} at this property and get a free airport taxi
        </span>
        <div className="hotelImages">
          {photos.map((photo, i) => (
            <div className="hotelImgWrapper" key={i}>
              <img
                onClick={() => handleOpen(i)}
                src={photo.src}
                alt=""
                className="hotelImg"
              />
            </div>
          ))}
        </div>
        <div className="hotelDetails">
          <div className="hotelDetailsTexts">
            <h1 className="hotelTitle">Stay in the heart of City</h1>
            <p className="hotelDesc">
              Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
              Street Apartments has accommodations with air conditioning and
              free WiFi. The units come with hardwood floors and feature a
              fully equipped kitchenette with a microwave, a flat-screen TV,
              and a private bathroom with shower and a hairdryer. A fridge is
              also offered, as well as an electric tea pot and a coffee
              machine. Popular points of interest near the apartment include
              Cloth Hall, Main Market Square and Town Hall Tower. The nearest
              airport is John Paul II International Kraków–Balice, 16.1 km
              from Tower Street Apartments, and the property offers a paid
              airport shuttle service.
            </p>
          </div>
          <div className="hotelDetailsPrice">
            <h1>Perfect for a 9-night stay!</h1>
            <span>
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </span>
            <h2>
              <b>{item.rent}</b> (9 nights)
            </h2>
           
            <button >
            <Link to="/book/1" className="button" > Reserve or Book Now!</Link>
            </button>
          </div>
        </div>
      </div>
    ))}
</div>

        <Maillist />
        <Footer />
      </div>
    </div>
        
        </>
    );
}