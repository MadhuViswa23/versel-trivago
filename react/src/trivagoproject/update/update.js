import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Navbar } from '../trivago/trivagocomponents/navbar/navbar';
import { Header } from '../trivago/trivagocomponents/header/header';
import Maillist from '../trivago/trivagocomponents/maillist/maillist';
import Footer from '../trivago/trivagocomponents/footer/footer';

export function Update() {
    const { id } = useParams();
    const [image, setImage] = useState('');
    const [hotelname, setHotelname] = useState('');
    const [place, setPlace] = useState('');
    const [floorsize, setFloorsize] = useState('');
    const [rent, setRent] = useState('');

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3006/getupdated/${id}`)
                .then(res => res.json())
                .then(data => {
                    setImage(data[0].image);
                    setHotelname(data[0].hotelname);
                    setPlace(data[0].place);
                    setFloorsize(data[0].floorsize);
                    setRent(data[0].rent);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [id]);

    const updated = (event) => {
        event.preventDefault();
        var image = document.getElementById("image").value;
        var hotelname = document.getElementById("hotelname").value;
        var place = document.getElementById("place").value;
        var floorsize = document.getElementById("floorsize").value;
        var rent = document.getElementById("rent").value;
        var data = {
            "image": image,
            "hotelname": hotelname,
            "place": place,
            "floorsize": floorsize,
            "rent": rent
        }

        if (image === "") {
            alert("Image is required!");
        } else if (hotelname === "") {
            alert("hotelname is required!");
        } else if (place === "") {
            alert("place is required")
        } else if (floorsize === "") {
            alert("floorsize is  required!");
        } else if (rent === "") {
            alert("rent is required!");
        } else {
            axios.put('http://localhost:3006/updaterooms/' + id, data)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("Data are not updated");
                    } else if (res.data.status === "updated") {
                        alert("Data are updated successfully");
                    }
                });
        }
    };

    return (
        <>
        <Navbar/>
        <Header/>
      

            <div>
                <div className="container mt-5">
                    <center>
                        <h3 className="mb-9">Update Rooms</h3>
                        <form onSubmit={updated} style={{ border: '1px solid #ccc', width: '400px', padding: '20px' }}>


                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">IMAGE </label>
                                <input type="text" id="image" name="image" placeholder="image" className="form-control" value={image} onChange={(change) => { setImage(change.target.value) }}></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="hotelname" className="form-label">hotelname</label>
                                <input type="text" className="form-control" id="hotelname" name="hotelname" required placeholder="Enter hotelname" value={hotelname} onChange={(change) => { setHotelname(change.target.value) }} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="place" className="form-label">place</label>
                                <input type="text" className="form-control" id="place" name="place" placeholder="Enter place" value={place} onChange={(change) => { setPlace(change.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="floorsize" className="form-label">floorsize</label>
                                <input type="text" className="form-control" id="floorsize" name="floorsize" placeholder="Enter floorsize" value={floorsize} onChange={(change) => { setFloorsize(change.target.value) }} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="rent" className="form-label">rent</label>
                                <input type="text" className="form-control" id="rent" name="rent" min="0" placeholder="Enter rent" value={rent} onChange={(change) => { setRent(change.target.value) }} />
                            </div>


                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <button className=' enroll btn btn-dark' type="submit">Submit</button>
                            </div>
                        </form>
                    </center>
                </div>
            </div>
            <Maillist/>
        <Footer/>
        </>
    );
}
