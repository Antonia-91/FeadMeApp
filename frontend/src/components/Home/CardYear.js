import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const CardYear = ({
  showAll,
  dates,
  onclick,
  onDelete,
}) => {
  return (
    <div className={showAll ? "card" : "hide"}>
      <div className="card-content">
        <header className="card-content-header">
          <h2 style={{ textTransform: "capitalize" }}>All saved recepies</h2>
          <span className="tab" onClick={onclick}>
            <p>Mounth</p>
          </span>
        </header>

        {dates?.map((date) => (
          <div className="card-date-info" key={date.meal_id}>
            <FaTimes
              style={{ color: "#ff4e50", cursor: "pointer" }}
              onClick={() => onDelete(date.date_id)}
            />
            <p>
              {date.day} / {date.date.slice(5, 10).replace("-", "/")}
            </p>

            <NavLink to={`/${date.meal_id}`}>
              <p> {date.meal_title.slice(" ", 15)}...</p>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardYear;
