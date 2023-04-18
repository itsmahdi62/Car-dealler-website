import "./Seller.scss"

import defaultImage from "../../asset/homeImg.png"

const Seller = () => {
    return ( 
    <div className="seller section">
        <div className="secContainer container">
            <div className="secHeading grid">
                <h3 className="secTitle">
                </h3>
                <p>Mahdi Almasi holds the record to be the best salesman
                </p>
            </div>

            <div className="sellersContainer grid">
                {/* Single seller */}
                <div className="singleSeller flex">
                    <div className="imgDiv flex">
                        <img src={defaultImage} alt="" className="img" />
                    </div>
                    <span className="info">
                        <h4 className="name">
                            Toyota
                        </h4>
                        <p>from $40;</p>
                    </span>
                </div>
                {/* Single seller */}
                <div className="singleSeller flex">
                    <div className="imgDiv flex">
                        <img src={defaultImage} alt="" className="img" />
                    </div>
                    <span className="info">
                        <h4 className="name">
                            Toyota
                        </h4>
                        <p>from $40;</p>
                    </span>
                </div>
                {/* Single seller */}
                <div className="singleSeller flex">
                    <div className="imgDiv flex">
                        <img src={defaultImage} alt="" className="img" />
                    </div>
                    <span className="info">
                        <h4 className="name">
                            Toyota
                        </h4>
                        <p>from $40;</p>
                    </span>
                </div>
                {/* Single seller */}
                <div className="singleSeller flex">
                    <div className="imgDiv flex">
                        <img src={defaultImage} alt="" className="img" />
                    </div>
                    <span className="info">
                        <h4 className="name">
                            Toyota
                        </h4>
                        <p>from $40;</p>
                    </span>
                </div>
            </div>
        </div>
    </div> );
}
 
export default Seller;