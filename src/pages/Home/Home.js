/* eslint-disable jsx-a11y/img-redundant-alt */
import "../../App.scss";
import "./Home.scss";
import homeIamge from "../../asset/homeImg.png";
const Home = () => {
  return (
    <div className="home">
      <div className="Container">
        <div  className="homeText">
          <span className="homeSpan">Meet your new car</span>
          <h1 className="homeTitle">Honda Civic Type R</h1>
          <div className="btns flex">
            <button className="btn">More Details</button>
            <button className="btn primaryBtn ">Test Drive</button>
          </div>
        </div>

        <div className="homeImage">
          <img src={homeIamge} className="img" alt="Home Image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
