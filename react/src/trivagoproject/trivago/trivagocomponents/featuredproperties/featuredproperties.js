import Footer from "../footer/footer";
import Maillist from "../maillist/maillist";
import "./featuredproperties.css";


const Featuredproperties = () => {


  return (
  <>
  
  <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="fpItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
              alt=""
              className="fpImg"
            />
            <span className="fpName">Aparthotel Stare Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="fpItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
              alt=""
              className="fpImg"
            />
            <span className="fpName">Comfort Suites Airport</span>
            <span className="fpCity">Austin</span>
            <span className="fpPrice">Starting from $140</span>
            <div className="fpRating">
              <button>9.3</button>
              <span>Exceptional</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="fpItem">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/09/0c/b2/lobby.jpg?w=700&h=-1&s=1"
              alt=""
              className="fpImg"
            />
            <span className="fpName">side sunport </span>
            <span className="fpCity">Antalya</span>
            <span className="fpPrice">Starting from $99</span>
            <div className="fpRating">
              <button>8.8</button>
              <span>Excellent</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="fpItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/37306283.jpg?k=a092898f775b64da9a3cc6ef1a9dbb7081b679430c5667d3b57157c70c2325d2&o=&hp=1"
              alt=""
              className="fpImg"
            />
            <span className="fpName">luna blanca resort & spa</span>
            <span className="fpCity">Turkiye</span>
            <span className="fpPrice">Starting from $105</span>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Maillist/>
    <Footer/>
  </>
    
  );
  
};


export default Featuredproperties;
