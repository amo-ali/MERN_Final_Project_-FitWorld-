import React, { useContext, useState } from "react";
import BMI from "./BMI";
import ActivityCard from "./ActivityCard";

import { JoinContext } from "./Main";

function Dashboard() {
  const { calor, setCal, step, setStep } = useContext(JoinContext);

  const activity = [
    {
      name: "Walking",
    },
    {
      name: "Running",
    },
    {
      name: "Swimming",
    },
    {
      name: "Hiking",
    },
    {
      name: "Cycling",
    },
  ];

  return (
    <div>
      <div id="dashboard" className="row">
        <div id="activity" className=" col-5 border p-2 m-3 rounded">
          <div className="border p-2 m-3 d-flex align-items-center rounded text-warning">
            <div className="p-3 daily"> Daily Activity</div>
            <div className="step p-3">
              Steps<p>{step}</p>
            </div>
            <div className="step p-3">
              Calories Burn<p>{calor}</p>
            </div>
          </div>

          <div>
            {activity.map((activity) => (
              <ActivityCard
                title={activity.name}
                calor={calor}
                setCal={setCal}
                step={step}
                setStep={setStep}
              />
            ))}
          </div>
        </div>
        <div className="activity2 col-6  p-2 m-3 rounded">
          <div id="picc"></div>
          <div id="BMI">
            <BMI />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
