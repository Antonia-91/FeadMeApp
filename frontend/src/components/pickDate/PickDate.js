import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { useParams } from "react-router-dom";

const PickDate = ({ meal }) => {
  const [value, onChange] = useState(new Date());

  // get id from URL
  let { id } = useParams();

  const date = `${value.getDate()}/${
    value.getMonth() + 1
  }/${value.getFullYear()} day: ${value.getDay()}`;

  console.log("date", date);

  const weekenDays = {
    1: "Monday",
    2: "Tuseday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };
  console.log("weekday", weekenDays[4]);

  let num = `${value.getDay()}`;
  console.log(num);
  console.log(weekenDays[num]);

  let day = weekenDays[num];
  console.log(day);

  let obj = {
    day: day,
    date: date,
    mealId: id,
    meal: meal
  };

  console.log(obj)

  

  return (
    <div>
      <h3>Add this recepie to my calendar</h3>
      <DatePicker
        dateFormat="DD-MM-YYYY"
        // defaultDate={moment().format("YYYY MMMM dddd")}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default PickDate;
