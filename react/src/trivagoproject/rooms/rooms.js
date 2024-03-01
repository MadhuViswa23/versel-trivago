import React from 'react'
import axios from "axios";
export default function Rooms(){
function inserted (event) {
event.preventDefault();
var image = document.getElementById("image").value
var hotelname = document.getElementById("hotelname").value
var place = document.getElementById("place").value
var floorsize = document.getElementById("floorsize").value
var rent = document.getElementById("rent").value


var data = {
    "image" : image,
    "hotelname" : hotelname,
    "place" : place,
    "floorsize" : floorsize,
    "rent" : rent,
    
   
}
if(image ===""){
    alert("Image is required!");
}
else if(hotelname===""){
    alert("hotelname is required!");
}
 else if(place ===""){
    alert("place is required")
}
 else if(floorsize=== ""){
    alert("floorsize is  required!");
}
else if(rent===""){
    alert("rent is required!");
}

else {
    axios.post("http://localhost:3006/insertt",data)
      .then((response,error)=>{
        if(error){
          alert("Data are not inserted")
        }
        else  if(response.data.status==="inserted"){
          alert("Data are inserted successfully")
          window.location.href="/viewall"
        }
      })
    }

}




    return(
        <>
        <div>
      <div className="container mt-5">
        <center>
          <h3 className="mb-9">Create Hotels</h3>
          <form onSubmit={inserted} style={{ border: '1px solid #ccc', width: '400px', padding: '20px' }}>
       
        
          <div className="mb-3">
          <label htmlFor="title" className="form-label">IMAGE </label>
              <input type = "text" id="image" name="image" placeholder="image" className="form-control"></input>
            </div>
            
            <div className="mb-3">
              <label htmlFor="hotelname" className="form-label">hotelname</label>
              <input type="text" className="form-control" id="hotelname" name="hotelname" required placeholder="Enter hotelname" />
            </div>
           
            <div className="mb-3">
              <label htmlFor="place" className="form-label">place</label>
              <input type="text" className="form-control" id="place" name="place" placeholder="Enter place" />
            </div>
            <div className="mb-3">
              <label htmlFor="floorsize" className="form-label">floorsize</label>
              <input type="text" className="form-control" id="floorsize" name="floorsize" placeholder="Enter floorsize" />
            </div>
            
            <div className="mb-3">
              <label htmlFor="rent" className="form-label">rent</label>
              <input type="text" className="form-control" id="rent" name="rent" min="0" placeholder="Enter rent" />
            </div>
         
          
            <div style={{ display: 'flex', justifyContent: 'center'}}>
              <button className=' enroll btn btn-dark' type="submit">Submit</button>
            </div>
          </form>
        </center>
      </div>
    </div>
        
        </>
    );
}
