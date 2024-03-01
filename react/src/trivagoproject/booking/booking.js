import React from 'react'
import './booking.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Navbar } from '../trivago/trivagocomponents/navbar/navbar';
import { Header } from '../trivago/trivagocomponents/header/header';
import Maillist from '../trivago/trivagocomponents/maillist/maillist';
import Footer from '../trivago/trivagocomponents/footer/footer';
export default function Booking (){

  function handleSubmit(event) {
    event.preventDefault();

    var fullname = document.getElementById("fullname").value
    var email = document.getElementById("email").value
    var phonenumber = document.getElementById("phonenumber").value
    var checkindate = document.getElementById("checkindate").value
    var checkoutdate = document.getElementById("checkoutdate").value
    var numberofguests = document.getElementById("numberofguests").value
    var roomtype = document.getElementById("roomtype").value
    var noofrooms = document.getElementById("noofrooms").value

    var data = {
      "fullname" : fullname,
      "email" : email,
      "phonenumber" : phonenumber,
      "checkindate" : checkindate,
      "checkoutdate" : checkoutdate,
      "numberofguests" : numberofguests,
      "roomtype" : roomtype,
      "noofrooms" : noofrooms

    }
    console.log(data)
    if( fullname ===""){
        alert("fullname");
    } 
    else if(email ===""){
        alert("email");
    }
    else if(phonenumber ===""){
        alert("phonenumber");
    }
    else if(checkindate === ""){
        alert("checkindate")
    }
    else if(checkoutdate === ""){
        alert("checkoutdate")
    }
    else if(numberofguests ===""){
        alert("numberofguests");
    }
    else if(roomtype ===""){
        alert("roomtype");
    }
else if(noofrooms===""){
  alert("noofrooms")
}

else {
  axios.post('http://localhost:3006/insertbookingtrivago', data)
  .then((response) => {
      if (checkindate === checkoutdate) {
      alert( "Check-in and check-out dates cannot be same" );
          return;
      }
      else if (response.data.status === "inserted") {
          alert("booked successfully");
        
      } else {
          alert(response.data.message || "Error: Rooms are not available for the selected dates");
        
      }
  })
  }
}
    return(
        <>
        <Navbar/>
        <Header/>
       
        <div className="background-container"style={{ color: 'silver' }}>
      <div className="container mt-5">
        <center>
          <h3 className="mb-9">Hotel Room Booking</h3>
          <form onSubmit={handleSubmit} style={{ width: '800px', padding: '20px' }}>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  required
                  placeholder="Full Name"
                  className="form-control mb-3"
                  style={{ backgroundColor: 'rgba(192, 192, 192, 0.5)', color: 'black', border: '1px solid silver' }}
                  
                />   <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
                className="form-control mb-3"
                style={{ backgroundColor: 'rgba(192, 192, 192, 0.5)', color: 'black', border: '1px solid silver' }}
             
              />
             
                <input
                  type="text"
                  id="phonenumber"
                  name="phonenumber"
                  required
                  placeholder="Phone Number"
                  className="form-control mb-3"
            
                />
                <input
                  type="date"
                  id="checkindate"
                  name="checkindate"
                  required
                  className="form-control mb-3"
                 
                />
                <input
                  type="date"
                  id="checkoutdate"
                  name="checkoutdate"
                  required
                  className="form-control mb-3"
                 
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  id="numberofguests"
                  name="numberofguests"
                  required
                  placeholder="Number of Guests"
                  className="form-control mb-3"
               
                />
                <input
                  type="text"
                  id="roomtype"
                  name="roomtype"
                  required
                  placeholder="Room Type"
                  className="form-control mb-3"
                 
                />

                <label>No of rooms</label>
                  <div className="col-md-6">
                                <input
                                    type="number"
                                    id="noofrooms"
                                    name="noofrooms"
                                    required
                                    placeholder="Number of Rooms"
                                    className="form-control mb-3"
                                
                                    min="1"
                                    max="10"
                                />
                            </div>
             
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Book Room</button>
          </form>
        </center>
      </div>
    </div>
    <Maillist/>
        <Footer/>
        
        </>
    );
}
