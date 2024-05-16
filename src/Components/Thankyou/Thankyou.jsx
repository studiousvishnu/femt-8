import "./Thankyou.css";
import { useLocation } from "react-router-dom";

import thankyou from "../../assets/images/illustration-thank-you.svg";
const Thankyou = () => {
  const location = useLocation();
  const userRating = location.state
    ? location.state.userRating
    : "0";
  return (
    <>
      <div className="container rounded-4 p-lg-5 ">
        <div className="row"></div>
        <div className="img-container text-center ">
          <img src={thankyou} alt="" />
        </div>
        <div className="user-rating py-2 mx-5 rounded-5 mt-3  mb-5 text-center ">
          You selected {userRating} out of 5{" "}
        </div>

        <div className="thankyou-container">
          <h3 className="text-white text-center">Thank You!</h3>
        </div>
        <div className="thanking-user-container  text-center  ">
          <div className="">
            <p style={{ color: "#9ca8b9" }} className="">
              We appreciate you taking the time to give a rating. <br /> If you
              ever need more support dont hesitate <br /> to get in touch!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thankyou;
