import React, { useState } from "react";
import { useParams } from "react-router-dom";

const PickDate = ({ meal, logedin, dates, setDates }) => {
  const [value, setValue] = useState(new Date().toISOString().slice(0, 10));
  console.log(value);

  // Weekdays
  const weekenDays = [
    "Monday",
    "Tuseday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // get id from URL
  let { id } = useParams();

  /// make obj global variable
  let obj = {};

  /// save  date to sates
  const onChange = async (e) => {
    setValue(e);
  };

  /// collect pices and buid an obj to send to server
  const submit = async () => {
    console.log(typeof value);

    let day1 = value[8]; // console.log(day1)
    let day2 = value[9]; //console.log(day2)
    let day = day1.concat(day2); //console.log(day)

    /// give day a weekday-name
    let weekday = weekenDays[day % weekenDays.length];
    //console.log(weekday);

    /// create a obj to send Db
    obj = {
      day: weekday,
      date: value,
      mealId: id,
      meal: meal,
      user_id: logedin.user_id,
    };

    console.log(obj);

    /// call func that POST to backend
    await saveDate(obj);
  };

  ///  Post date
  // https://feadmeapp-examen-project.herokuapp.com/saveDate
  // "https://corsanywhere.herokuapp.com/https://feadmeapp-examen-project.herokuapp.com/savedate"
  // http://localhost:5005/savedate

  const saveDate = async (obj) => {
    const res = await fetch(
      "https://corsanywhere.herokuapp.com/https://feadmeapp-examen-project.herokuapp.com/sparadatum",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );
    const data = await res.json();
    console.log(data);
    //alert(value);
  };

  return (
    <>
      <div>
        <h3>Add this recepie to my calendar</h3>

        <input
          type="date"
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
        <button className="save_date_btn" onClick={submit}>
          save
        </button>
      </div>
    </>
  );
};

export default PickDate;

/// take value string and replce "-" to " "
// let replace1 = value.replace("-", " ");
// let replace2 = replace1.replace("-", " ");
// console.log(replace2);
