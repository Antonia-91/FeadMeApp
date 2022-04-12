import React from "react";

//--- images ---//
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import img7 from "./images/img7.png";
import img8 from "./images/img8.png";

const Box = () => {
  return (
    <div>
      <div className="box">
        <span style={{ "--i": "1" }}>
          <img src={img1} height="100px" width="100px" />
        </span>
        <span style={{ "--i": "2" }}>
          <img src={img2} height="200px" width="200px" />
        </span>
        <span style={{ "--i": "3" }}>
          <img src={img3} height="200px" width="200px" />
        </span>
        <span style={{ "--i": "4" }}>
          <img src={img4} height="200px" width="200px" />
        </span>
        <span style={{ "--i": "5" }}>
          <img src={img5} height="200px" width="200px" />
        </span>
        <span style={{ "--i": "6" }}>
          <img src={img6} height="200px" width="200px" />
        </span>
        <span style={{ "--i": "7" }}>
          <img src={img7} height="200px" width="200px" />
        </span>
        <span style={{ "--i": "8" }}>
          <img src={img8} height="200px" width="200px" />
        </span>
      </div>
    </div>
  );
};

export default Box;
