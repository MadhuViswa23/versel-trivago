import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../trivago/trivagocomponents/navbar/navbar";
import { Header } from "../trivago/trivagocomponents/header/header";
import Maillist from "../trivago/trivagocomponents/maillist/maillist";
import Footer from "../trivago/trivagocomponents/footer/footer";

export function Newget() {
  const [getdata, setGetdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3006/get")
      .then((res) => res.json())
      .then((data) => setGetdata(data));
  }, []);

 
  const del = (id) => {
    var key = { id: id };
    axios.post("http://localhost:3006/deletehotel", key).then((response, error) => {
      if (error) {
        alert("Data are not removed");
      } else if (response.data.status === "deleted") {
        alert("Data is deleted successfully");
      }
    });
  };

  return (
    <>
    <Navbar/>
    <Header/>

    <table className="table">
    <thead>
      <tr>
        <th>SN0</th>
        <th>IMAGE</th>
        <th>hotelname</th>
        <th>place</th>
        <th>floorsize</th>
         <th>rent</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {getdata.map((value, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td style={{ width: "90px" }}>
            <img
              src={value.image}
              alt={value.title}
              style={{ maxWidth: "80%", height: "auto" }}
            />
          </td>
          <td>{value.hotelname}</td>
          <td>{value.place}</td>
          <td>{value.floorsize}</td>
         <td>{value.rent}</td>
          <td>
            <Link to={`/updaterooms/${value.id}`}>
              <button className="btn btn-success">Update</button>
            </Link>

            <button
  className="btn btn-danger text-white"
  style={{ margin: '0 10px' }} 
  onClick={() => {
    del(value.id);
  }}>Delete</button>
         
            
          </td>
        </tr>
      ))}
    </tbody>
    <Link to="/admin" className="btn btn-dark text-white" style={{maxWidth: "90px", alignItems:"center"}}>     back </Link>
  </table>
  
    <Maillist/>
    <Footer/>
    
    </>
  );
}
