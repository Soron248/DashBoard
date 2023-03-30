import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../imgs/logo.png";
import { motion } from "framer-motion";
import { SideBarData } from "../../Data/data";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";

const SideBar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        <div className="logo">
          <img src={Logo} alt="" />
          <span>Shops</span>
        </div>

        <div className="menu">
          {SideBarData.map((item, index) => {
            return (
              <div
                key={index}
                className={selected === index ? "menuItem active" : "menuItem"}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SideBar;
