import React, { FC } from "react";
import "./preloader.scss";

const Preloader: FC = () => {
  return (
    <div className="preloader">
      <div className="preloader-align">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      </div>
    </div>
  );
};

export default Preloader;
