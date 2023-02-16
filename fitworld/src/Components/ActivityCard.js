import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ActivityForm from "./ActivityForm";
import { JoinContext } from "./Main";

function ActivityCard(props) {
  const { setUserActivity, userActivity } = useContext(JoinContext);

  const activityType = props.title;

  const [showForm, setShowForm] = useState(false);
  const [showActivity, setShowActivity] = useState({});

  // const [showActivity, setShowActivity] = useState(() => {
  //   const saved = localStorage.getItem("activity");
  //   const value = JSON.parse(saved);
  //   return value || {};
  // });

  // useEffect(() => {
  //   localStorage.setItem("activity", JSON.stringify(showActivity));
  // }, [showActivity]);
  // console.log(showActivity);

  const showCal = (duration) => {
    // console.log(typeof duration );
    switch (activityType) {
      case "Running":
        let step1 = Number(duration.time) * 200;
        props.setStep(props.step + step1);
        let cal1 = parseInt(step1 / 20);
        props.setCal(props.calor + cal1);
        const obj1 = {
          cal1: "Calories: ",
          stp: "Steps: ",
          calories: cal1,
          step: step1,
        };
        setShowActivity(obj1);
        postActivity(duration.time, obj1);

        break;
      case "Walking":
        let steps = Number(duration.time) * 130;
        props.setStep(props.step + steps);
        let cal = parseInt(steps / 20);
        props.setCal(props.calor + cal);
        const obj = {
          cal1: "Calories: ",
          stp: "Steps: ",
          calories: cal,
          step: steps,
        };
        setShowActivity(obj);
        postActivity(duration.time, obj);

        break;
      case "Swimming":
        let lap = parseInt(Number(duration.time) * 3);
        console.log("lap", lap);
        let cal2 = parseInt(lap * 2);
        props.setCal(props.calor + cal2);
        const obj2 = {
          cal1: "Calories: ",
          stp: "Lap: ",
          calories: cal2,
          step: lap,
        };
        setShowActivity(obj2);
        postActivity(duration.time, obj2);
        break;
      case "Hiking":
        let step3 = Number(duration.time) * 99;
        props.setStep(props.step + step3);
        let cal3 = parseInt(step3 / 20);
        props.setCal(props.calor + cal3);
        const obj3 = {
          cal1: "Calories: ",
          stp: "Steps: ",
          calories: cal3,
          step: step3,
        };
        setShowActivity(obj3);
        postActivity(duration.time, obj3);

        break;
      case "Cycling":
        let paddle = Number(duration.time) * 50;
        // props.setStep(props.step + paddle);
        let cal4 = parseInt(paddle / 15);
        props.setCal(props.calor + cal4);
        const obj4 = {
          cal1: "Calories: ",
          stp: "Paddle: ",
          calories: cal4,
          step: paddle,
        };
        setShowActivity(obj4);
        postActivity(duration.time, obj4);

        break;
      default:
        break;
    }
  };
  const postActivity = (duration, obj) => {
    const todayDate = new Date();
    const date =
      todayDate.getFullYear() +
      "-" +
      (todayDate.getMonth() + 1) +
      "-" +
      todayDate.getDate();
    const post = {
      activityType: activityType,
      duration: duration,
      date: date,
      calories: obj.calories,
      steps: obj.step,
    };
    axios
      .post("http://localhost:5000/activity/", post)
      .then((res) => {
        console.log(res);
        setUserActivity([...userActivity, res.data]);
      })
      .catch((err) => alert("Joined Again", err));
  };
  return (
    <div className="border p-2 m-3  rounded">
      <div className="activityTitle ">
        <div className="pl-3 text-white ">{activityType}</div>
        <button
          className="py-1 px-2 mr-5 rounded btn btn-outline-warning text-white rounded"
          onClick={() => setShowForm(true)}
        >
          Enter
        </button>
      </div>
      <div>
        {showForm ? (
          <ActivityForm setShowForm={setShowForm} showCal={showCal} />
        ) : null}
      </div>
      <div>
        {showActivity == {} ? null : (
          <div className="text-white pl-3">
            <p className="text-white pr-3">
              {showActivity.stp}
              {showActivity.step} {showActivity.cal1} {showActivity.calories}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ActivityCard;
