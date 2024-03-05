import React from 'react';
import { Container, Row, Col, Image, Form } from 'react-bootstrap';
import Featured from '../trivago/trivagocomponents/featured/featured';

export default function Pricee() {
    return (
        <>
            <section data-testid="advertiser-bar" className="AdvertiserBar_section__ZO8en AdvertiserBar_grey__Iy9f2">
                <h2 className="sr-only" id="advertiser-bar-headline">Our Partners</h2>
                <Container fluid className="mx-auto px-4 2xs:px-5 l:px-10 2xl:px-5">
                    <Row className="AdvertiserBar_list__7pjBz">
                        <Col className="AdvertiserBar_item__S5R2i"><Image data-testid="advertiser-image" src="https://imgfl.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/395.png" alt="Agoda" loading="lazy" className="AdvertiserImage_img__Kltn4" /></Col>
                        <Col className="AdvertiserBar_item__S5R2i"><Image data-testid="advertiser-image" src="https://imgfl.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/3340.png" alt="Hotels.com" loading="lazy" className="AdvertiserImage_img__Kltn4" /></Col>
                        <Col className="AdvertiserBar_item__S5R2i"><Image data-testid="advertiser-image" src="https://imgfl.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/626.png" alt="Booking.com" loading="lazy" className="AdvertiserImage_img__Kltn4" /></Col>
                        <Col className="AdvertiserBar_item__S5R2i"><Image data-testid="advertiser-image" src="https://imgfl.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/2192.png" alt="MakeMyTrip" loading="lazy" className="AdvertiserImage_img__Kltn4" /></Col>
                        <Col className="AdvertiserBar_item__S5R2i"><Image data-testid="advertiser-image" src="https://imgfl.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/14.png" alt="Accor" loading="lazy" className="AdvertiserImage_img__Kltn4" /></Col>
                        <Col className="AdvertiserBar_item__S5R2i"><Image data-testid="advertiser-image" src="https://imgfl.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/634.png" alt="Trip.com" loading="lazy" className="AdvertiserImage_img__Kltn4" /></Col>
                        <Col className="AdvertiserBar_item__S5R2i"><Image data-testid="advertiser-image" src="https://imgfl.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/2452.png" alt="OYO" loading="lazy" className="AdvertiserImage_img__Kltn4" /></Col>
                        <Col className="AdvertiserBar_showMore__K5TwK">+100s more</Col>
                    </Row>
                </Container>
            </section>
            <div className="PriceCalendar" style={{ position: 'relative', top: '80px' , maxHeight:'300px'}}>
            <img
    className="PriceCalendar_mainImage__P_btn PriceCalendar_blurredImage__6nbMd"
    src="https://imgfl.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_380,q_45,w_980/v1696850441/sem-image-extension/original/United_Kingdom_31464_v2.jpeg"
    draggable="false"
    itemProp="image"
    alt=""
    height="600px" // Specify height as a string
  
  />
            <div>
                <div className="mx-auto Wrapper_default__ARyPI " style={{ position: 'relative', bottom: '520px', margin: '10px', padding: '20px',maxHeight: '500px',maxWidth : '1000px' , fontWeight:"bold"}}>
                    <h2 className="Heading_heading__xct3h Heading_h-l__aJ4SA PriceCalendar_heading__lkSpA font-bold pt-8 mb-25 text-black" data-testid="price-calendar-headline">Discover the best time to book your next stay</h2>
                    <div className="PriceCalendar_monthsContainer__xx1Fx px-4 pt-4 bg-white rounded-lg shadow-nux-15 PriceCalendar_listWithoutExpandButton__CnPkM">
                        <div className="HorizontalScrollRow_wrapper__MUuNp" >
                            <div className="relative HorizontalScrollRow_white__HuXZj">
                                <div className="HorizontalScrollRow_scrollList__qSYze">
                                    <div>
                                        <div>
                                            <div className="PriceCalendar_scrollChild__ZA3gI space-x-2 mb-4 flex"  style={{ display: 'flex', justifyContent: 'space-between' }} >
                                                <label className="PriceCalendar_pillBtn__7ksa_">
                                                    <input name="destination" type="radio" className="PriceCalendar_radio__JTRZU" checked />
                                                    New York
                                                </label>
                                                <label className="PriceCalendar_pillBtn__7ksa_">
                                                    <input name="destination" type="radio" className="PriceCalendar_radio__JTRZU" />
                                                    Tokyo
                                                </label>
                                                <label className="PriceCalendar_pillBtn__7ksa_">
                                                    <input name="destination" type="radio" className="PriceCalendar_radio__JTRZU" />
                                                    Istanbul
                                                </label>
                                                <label className="PriceCalendar_pillBtn__7ksa_">
                                                    <input name="destination" type="radio" className="PriceCalendar_radio__JTRZU" />
                                                    Osaka
                                                </label>
                                                <label className="PriceCalendar_pillBtn__7ksa_">
                                                    <input name="destination" type="radio" className="PriceCalendar_radio__JTRZU" />
                                                    aris



                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     

                        <div className="price-list">
  <h3>Prices are based on the average price range for 3-star hotels per night:</h3>
  <div style={{ display: 'flex' , paddingBottom: '20px'}}>
    <div style={{ flex: 1 }}>
      <table>
        <tbody>
          <tr>
            <td>March</td>
            <td>₹9,439 - ₹27,168</td><br/><br/>
          </tr>
          <tr>
            <td>April</td>
            <td>₹11,234 - ₹31,746</td><br/><br/>
          </tr>
          <tr>
            <td>May</td>
            <td>₹14,206 - ₹36,842</td><br/><br/>
          </tr>
          <tr>
            <td>June</td>
            <td>₹14,172 - ₹39,851</td><br/><br/>
          </tr>
          <tr>
            <td>July</td>
            <td>₹13,234 - ₹37,795</td><br/><br/>
          </tr>
        </tbody>
      </table>
    </div>
    <div style={{ flex: 1 }}>
      <table>
        <tbody>
          <tr>
            <td>August</td>
            <td>₹12,749 - ₹36,847</td><br/><br/>
          </tr>
          <tr>
            <td>September</td>
            <td>₹15,195 - ₹33,559</td><br/><br/>
          </tr>
          <tr>
            <td>October</td>
            <td>₹10,867 - ₹28,790</td><br/><br/>
          </tr>
          <tr>
            <td>November</td>
            <td>₹9,775 - ₹28,349</td><br/><br/>
          </tr>
          <tr>
            <td>December</td>
            <td>₹13,124 - ₹40,000</td><br/><br/>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>
                </div>
            </div>
        </div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<br/>
<br/>
<br/>
        </>
    );
}
