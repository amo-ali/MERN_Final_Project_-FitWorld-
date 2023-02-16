import axios from "axios";
import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { JoinContext } from "./Main";

function ActivityReport() {
  const navigate = useNavigate();

  const { userjoin, calor, userActivity, today, dateList, setNavChange } =
    useContext(JoinContext);
  const [userBMI, setUserBMI] = useState(0);
  const [status, setStatus] = useState("");
  //calculate User BMI
  const BMI = () => {
    const heightCM =
      ((Number(userjoin[0].ft) * 12 + Number(userjoin[0].inches)) * 2.54) / 100;
    const bmi = Number(userjoin[0].weight) / heightCM ** 2;
    const UserBMI = bmi.toFixed(2);
    if (UserBMI < 18.5) {
      setUserBMI(UserBMI);
      setStatus("Your are in UnderWeight. You need to Gain Weight");
    } else if (UserBMI >= 18.5 && UserBMI <= 25) {
      setUserBMI(UserBMI);
      setStatus("Your are  Normal. Great!!");
    } else if (UserBMI > 25 && UserBMI <= 35) {
      setUserBMI(UserBMI);
      setStatus("Your are in OverWeight.You need to Lose weight");
    } else if (UserBMI > 35) {
      setUserBMI(UserBMI);
      setStatus("Your are in Obesity. You are in a Critical situation");
    }
  };
  // const found = userActivity.find((el) => el.date === "2023-2-16");
  // console.log("mapfound", found);
  // console.log("userrrrr", userjoin);
  return (
    <div id="report">
      <div className=" p-4 col-12 row">
        <div className="col-6 row">
          <div className="profile col-4 "></div>
          <div className="col-1"></div>
          <div className="detail1 text-dark col-6">
            <p className="detail text-dark">
              <b>Name:</b> {userjoin[0].name}
            </p>
            <p className="detail text-dark">
              <b>Height:</b> {userjoin[0].ft}'{userjoin[0].inches}
            </p>
            <p className="detail text-dark">
              <b>Weight:</b> {userjoin[0].weight} kg
            </p>
            <p className="detail text-dark">
              <b>Age:</b> {userjoin[0].age}
            </p>
          </div>
        </div>
        <div className="col-2"></div>

        <div className="detail1 col-2">
          <button className="btn btn-light" onClick={() => BMI()}>
            Your BMI
          </button>
          <div id="userbmi">
            <b>BMI:</b> {userBMI} <br />
            <b>Status:</b> {status}
          </div>
        </div>
        <div className="detail1 col-2">
          <button
            className="btn btn-warning"
            onClick={() => {
              localStorage.clear();
              axios
                .delete(`http://localhost:5000/users/`)
                .catch((err) => alert("Not Delete", err));
              axios
                .delete(`http://localhost:5000/activity/`)
                .then(() => {
                  setNavChange(false);
                  navigate("/", { replace: true });
                })
                .catch((err) => alert("Not Delete", err));
            }}
          >
            UnJoin
          </button>
        </div>
      </div>
      {dateList.map((datereport) => (
        <div className="p-2 ml-3 text-dark">
          <Card style={{ width: "27rem" }}>
            <Card.Body>
              <Card.Title className="row">
                <div className="col-6">
                  <div>{today}</div>
                  <div>{datereport.date}</div>
                </div>
                <div className="col-6">Calories Burn: {calor}</div>{" "}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <div className="row p-2 displaycard">
                  <div className="col-3 pr-2">Activity</div>
                  <div className="col-3 pr-2">Calories</div>
                  <div className="col-3 pr-2">Time</div>
                </div>
              </Card.Subtitle>
              <Card.Text>
                <div className="row">
                  {userActivity.map((act) =>
                    act.date === datereport.date ? (
                      <div className="row p-2 mb-1 displaycard">
                        <div className="col-3 pr-2">{act.activityType}</div>
                        <div className="col-3 pr-2">{act.calories}</div>
                        <div className="col-3 pr-2">{act.duration}</div>
                      </div>
                    ) : null
                  )}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default ActivityReport;
