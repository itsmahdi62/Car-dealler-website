import "./Review.scss"
import {BsArrowLeftShort} from 'react-icons/bs'
import defaultCar from "../../asset/homeImg.png"
import {AiFillStar} from "react-icons/ai"
const Review = () => {
    return ( 
    <div className="review section">
        <div className="secContainer container">

            <div className="secHeading flex">
                <h3 className="secTitle">
                    Recent Reviews
                </h3>
                <div className="navBtns flex">
                    <BsArrowLeftShort classNameicon leftIcon />
                </div>
            </div>
        {/* review container */}
         <div className="reveiwContainer grid">
          {/* single reveiw */}
            <div className="singleReview"> 
                <div className="imgDiv">
                    <img src={defaultCar} alt="Car Image" />
                </div>
                <h5 className="reviewTitle">
                    20233 Cadillac
                </h5>
                <span className="desc">
                    Good cars are safe , fast , affordable to purchase , economical to 
                    operate , reliable , cacacious , comfortable , and attractive .  
                </span>

                <div className="reviewerDiv flex">
                    <div className="leftDiv flex">
                        <div className="reviewerImage" >
                            <img src={defaultCar} alt="Reviewr Image" />
                        </div>
                        <div className="aboutReviewer">
                            <span className="name">
                                Mahdi Almasi
                            </span>
                            <p>Chief Editor </p>
                        </div>
                    </div>
                    <div className="rightDiv flex">
                        <AiFillStar className='icon' />
                        <blockquote>4.84</blockquote>
                    </div>
                </div>
            </div>
            {/* single reveiw */}
            <div className="singleReview"> 
                <div className="imgDiv">
                    <img src={defaultCar} alt="Car Image" />
                </div>
                <h5 className="reviewTitle">
                    20233 Cadillac
                </h5>
                <span className="desc">
                    Good cars are safe , fast , affordable to purchase , economical to 
                    operate , reliable , cacacious , comfortable , and attractive .  
                </span>

                <div className="reviewerDiv flex">
                    <div className="leftDiv flex">
                        <div className="reviewerImage" >
                            <img src={defaultCar} alt="Reviewr Image" />
                        </div>
                        <div className="aboutReviewer">
                            <span className="name">
                                Mahdi Almasi
                            </span>
                            <p>Chief Editor </p>
                        </div>
                    </div>
                    <div className="rightDiv flex">
                        <AiFillStar className='icon' />
                        <blockquote>4.84</blockquote>
                    </div>
                </div>
            </div>
            {/* single reveiw */}
            <div className="singleReview"> 
                <div className="imgDiv">
                    <img src={defaultCar} alt="Car Image" />
                </div>
                <h5 className="reviewTitle">
                    20233 Cadillac
                </h5>
                <span className="desc">
                    Good cars are safe , fast , affordable to purchase , economical to 
                    operate , reliable , cacacious , comfortable , and attractive .  
                </span>

                <div className="reviewerDiv flex">
                    <div className="leftDiv flex">
                        <div className="reviewerImage" >
                            <img src={defaultCar} alt="Reviewr Image" />
                        </div>
                        <div className="aboutReviewer">
                            <span className="name">
                                Mahdi Almasi
                            </span>
                            <p>Chief Editor </p>
                        </div>
                    </div>
                    <div className="rightDiv flex">
                        <AiFillStar className='icon' />
                        <blockquote>4.84</blockquote>
                    </div>
                </div>
            </div>
            {/* single reveiw */}
            <div className="singleReview"> 
                <div className="imgDiv">
                    <img src={defaultCar} alt="Car Image" />
                </div>
                <h5 className="reviewTitle">
                    20233 Cadillac
                </h5>
                <span className="desc">
                    Good cars are safe , fast , affordable to purchase , economical to 
                    operate , reliable , cacacious , comfortable , and attractive .  
                </span>

                <div className="reviewerDiv flex">
                    <div className="leftDiv flex">
                        <div className="reviewerImage" >
                            <img src={defaultCar} alt="Reviewr Image" />
                        </div>
                        <div className="aboutReviewer">
                            <span className="name">
                                Mahdi Almasi
                            </span>
                            <p>Chief Editor </p>
                        </div>
                    </div>
                    <div className="rightDiv flex">
                        <AiFillStar className='icon' />
                        <blockquote>4.84</blockquote>
                    </div>
                </div>
            </div>
         </div>

        </div>
    </div>);
}
 
export default Review;