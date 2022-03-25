import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const CardMounth = ({
  showThisMounth,
  logedin,
  dates,
  mounth,
  onclick,
  onDelete,
}) => {
  return (
    <div className={showThisMounth ? "card" : "hide"}>
      <div className="card-content">
        <header className="card-content-header">
          <h2 style={{ textTransform: "capitalize" }}>
            {logedin.userName}s recepies this mounth
          </h2>
          <span
            className="tab"
            //onClick={() => setShowThisMounth((presState) => !presState)}
            onClick={onclick}
          >
            <p>show all</p>
          </span>
        </header>

        {dates?.map((date) => {
          if (date.date.slice(5, 7).includes(mounth)) {
            return (
              <div className="card-date-info" key={date.date_id}>
                <FaTimes
                  style={{ color: "#ff4e50", cursor: "pointer" }}
                  onClick={() => onDelete(date.date_id)}
                />
                <p>
                  {date.day} / {date.date.slice(5, 10).replace("-", "/")}
                </p>
                <NavLink to={`/${date.meal_id}`}>
                  {" "}
                  {date.meal_title.slice(" ", 20)}...
                </NavLink>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CardMounth;
