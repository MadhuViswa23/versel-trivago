
import "./searchitems.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const SearchItem = () => {
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

  return (
    <div className="searchItem">
      {getdata.map((item, index) => (
        <div key={index}>
          <img
            src={item.image} 
            alt=""
            className="siImg"
            
          />
          <div className="siDesc">
            <h1 className="siTitle">{item.hotelname}</h1>
            <span className="siDistance">500m from {item.place}</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
              Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
              Entire studio • 1 bathroom • {item.floorsize}
            </span>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">
              You can cancel later, so lock in this great price today!
            </span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>Excellent</span>
              <button>8.9</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice"> {item.rent}</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <div className="buttonContainer">
              <button className="enroll" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize:'15px' }}>
              <Link to={`/viewmore/${item.id}`} className='siCheckButton noUnderline' style={{ textAlign: 'center', width: '120px' }}>
  See Availability
</Link>
<Link to="/book/1" className='enroll gap-2' style={{ width: '120px' }}>
  Reserve
</Link>

</button>

        
      
    
  </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchItem;