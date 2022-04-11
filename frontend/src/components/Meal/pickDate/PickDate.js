import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { useParams } from "react-router-dom";

const PickDate = ({ meal, logedin, dates, setDates }) => {
  const [value, setValue] = useState(new Date().toISOString().slice(0, 10));
  const [day, setDay] = useState();
  console.log(value);

  //   const [dateValue, onChangeDate] = useState(
  //     new Date().toISOString().slice(0, 10)
  //   );

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
    console.log(value);

    let day1 = value[8];
    let day2 = value[9];
    let day = day1.concat(day2);
    //console.log(day);

    /// save as a number
    setDay(parseInt(day));

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

    /// call func that POST ti backend
    await savDate(obj);
  };

  ///  Post date
  // https://feadmeapp-examen-project.herokuapp.com/saveDate
  // http://localhost:5005/saveDate
  const savDate = async (obj) => {
    const res = await fetch(
      "https://corsanywhere.herokuapp.com/https://feadmeapp-examen-project.herokuapp.com/saveDate",
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
        <button onClick={submit}>save</button>
      </div>
    </>
  );
};

export default PickDate;

{
  /* <div>
        <h3>Add this recepie to my calendar</h3>
        <DatePicker
          style={{ color: "black", backgroundColor: "orange" }}
          placeholder="pick a date "
          dateFormat="YYYY-MM-DD"
          onChange={onChange}
          value={value}
        />
      </div> */
}

// // get date
// const date = `${value.getFullYear()}- 0${
//   value.getMonth() + 1
// }- ${value.getDate()}`;

// // get mounth
// const mounth = ` ${value.getMonth()} `;

// // give day a name
// let num = `${value.getDay()}`;
// let day = weekenDays[num];

// console.log("mounth:", mounth, "date", date, "day:", day);

// let obj = {
//   day: day,
//   date: date,
//   mealId: id,
//   meal: meal,
//   user_id: logedin.user_id,
// };

// console.log(obj);
