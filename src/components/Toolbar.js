import React from "react";
// import DateTabs from "./DateTabs";
import CenteredTabs from "./MaterialTabs";
import TransitionsModal from "./MaterialModal";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <a className="navbar-brand" href="/">
        <img
          src="images/logo-large.png"
          width="200"
          alt="CallForce Dental Scheduling"
        />
      </a>
      <CenteredTabs />
      {/* <DateTabs /> */}
      {/* <button className="btn">Add Availability</button> */}
      <TransitionsModal />
    </div>
  );
};

export default Toolbar;
