import React from "react";
import {
  FaShoePrints,
  FaHeartbeat,
  FaHamburger,
  FaGlassWhiskey,
} from "react-icons/fa";

const CardPersona = ({ logedin }) => {
  return (
    <div className="card-persona">
      <div className="card-persona-content">
        <div className="content-left">
          <h2
            style={{
              textTransform: "capitalize",
              fontSize: "50px",
              color: "#ff4e50",
              writingMode: "vertical-rl",
            }}
          >
            {logedin.userName}
          </h2>
        </div>
        <div className="content-right">
          <span>
            <FaShoePrints style={{ color: "#ff4e50;", fontSize: "30px" }} />
           <p>1300/8000 steps</p> 
          </span>
          <span>
            <FaHeartbeat style={{ color: "orange", fontSize: "30px" }} />
           <p> 71 beats/min</p>
          </span>
          <span>
            <FaHamburger style={{ color: "#ff4e50;", fontSize: "30px" }} />
        <p> 1200 kcal / 2800 </p>
          </span>
          <span>
            <FaGlassWhiskey style={{ color: "orange", fontSize: "30px" }} />
        <p> 1 L / 3 L</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardPersona;
