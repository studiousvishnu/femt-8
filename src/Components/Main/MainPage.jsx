/* eslint-disable no-unused-vars */
import "./MainPage.css";
import { useState } from "react";
import star from "../../assets/images/icon-star.svg";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [userRating, setUserRating] = useState(0);
  const navigate = useNavigate();

  const handleRatingClick = (rating) => {
    setUserRating(rating);
  };

  const handleSubmitButton = () => {
    navigate("/thankyou", { state: { userRating: userRating } });
  };
  return (
    <>
      <div
        className="container mx-auto rounded-4 ps-3 py-4"
        style={{ width: "500px", background: "#212832" }}
      >
        <div className="row">
          <div
            className="img-container p-3 rounded-circle w-auto ms-4 mt-4"
            style={{ background: "#262f38" }}
          >
            <img src={star} alt="" style={{ height: "20px" }} />
          </div>
          <div className="data-container text-white mt-4 ms-3">
            <h3 className="fw-bold">How did we do?</h3>
            <p className="fw-bold pe-5" style={{ color: "#818892" }}>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <div className="rating-container d-flex text-white ms-3">
            {[1, 2, 3, 4, 5].map((rating) => (
              <div
                key={rating}
                className={`rating-btn-hover fw-bold p-3 px-4 rounded-circle w-auto ms-4 mt-4 ${
                  userRating === rating ? "bg-grey" : ""
                }`}
                onClick={() => handleRatingClick(rating)}
              >
                <span>{rating}</span>
              </div>
            ))}
          </div>
          <div className="thankyou-container px-5">
            <button
              className="fw-bold submit-btn btn w-100 rounded-5 p-3 mt-5 my-3"
              onClick={handleSubmitButton}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
