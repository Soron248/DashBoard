import React from "react";
import { UpdatesData } from "../../Data/data";
import "./updates.css";

const Updates = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update, index) => {
        return (
          <div className="update" key={index}>
            <img src={update.img} alt="profile" />
            <div className="noti">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
              <span
                style={{
                  letterSpacing: "1px",
                }}
              >
                {update.time}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
