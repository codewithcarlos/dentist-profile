import React from "react";
import MaterialTabs from "./MaterialTabs";
import MaterialModal from "./MaterialModal";

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
      <MaterialTabs />
      <MaterialModal />
    </div>
  );
};

export default Toolbar;
