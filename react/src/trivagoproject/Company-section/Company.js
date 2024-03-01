import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./company-section.css";

const Company = () => {
  return (
    <section>
      <Container>
        <div className="com">
          <Row className="f">
          <Col xs="auto">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Agoda_transparent_logo.png" 
              alt="Image 1" width="125px" height="60px" />
            </Col>
            <Col xs="auto">
              <img src="https://blog.triaster.co.uk/hs-fs/hubfs/images/blog/Aris.png?width=617&height=290&name=Aris.png" 
              alt="Image 1" width="125px" height="60px" />
            </Col>
          <Col xs="auto">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlYaUZSyri2-GkVXxX6C-m5oe1I-X6LizG3-OHCOVI9A&s"
               alt="Image 4" width="125px" height="58px" />
            </Col>
            <Col xs="auto">
              <img src="https://skift.com/wp-content/uploads/2018/05/priceline-e1525714984153.png" 
              alt="Image 5" width="125px" height="58px" />
            </Col>
            <Col xs="auto">
              <img src="https://e7.pngegg.com/pngimages/393/91/png-clipart-kimpton-hotels-restaurants-intercontinental-hotels-group-boutique-hotel-hotel-text-logo.png" 
              alt="Image 5" width="125px" height="55px" />
            </Col>
            
            
           
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Company;
