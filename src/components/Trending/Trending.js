import "./Trending.scss";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
// import { useEffect } from "react";
// import axios from "axios";
import defaultImage from "../../asset/homeImg.png";

const Trending = () => {
  // },[])
  return (
    <div className="trending">
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">Trending Near you</h3>
          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>

        <div className="carContainer grid">
          {/* Single Car Div */}
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={defaultImage} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <spnan className="miles">11457 miles</spnan>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price-seller flex">
              <span className="price">$41,200</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>
          {/* Single Car Div */}
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={defaultImage} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <spnan className="miles">11457 miles</spnan>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price-seller flex">
              <span className="price">$41,200</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>
          {/* Single Car Div */}
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={defaultImage} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <spnan className="miles">11457 miles</spnan>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price-seller flex">
              <span className="price">$41,200</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
