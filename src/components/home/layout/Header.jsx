import React from "react";
import { Link } from "react-router-dom";
import { TbActivityHeartbeat } from "react-icons/tb";

const Header = () => {
  return (
    <nav>
      <div className="logo">
        {/* <LuActivity /> */}
        <TbActivityHeartbeat />
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Intro">Intro</Link>
        <Link to="/ContactUs">ContactUs</Link>
        <Link to="/AboutUs">AboutUs</Link>
        <Link to="/reservation">Reservation</Link>
      </div>
    </nav>
  );
};

export default Header;
