import React from "react";
import CustomerReview from "../Customer/CustomerReview";
import Updates from "../Updates/Updates";
import "./right.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
