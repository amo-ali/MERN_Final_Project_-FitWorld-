import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./AboutPage";
import ActivityReport from "./ActivityReport";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import JoinNow from "./JoinNow";
import ServicePage from "./ServicePage";
import TeamPage from "./TeamPage";
export const JoinContext = createContext();

function Main() {
  // localStorage.clear();

  const [joined, setJoined] = useState(() => {
    const saved = localStorage.getItem("join");
    const value = JSON.parse(saved);
    return value || [];
  });
  const [changeNav, setChangeNAv] = useState(() => {
    const saved = localStorage.getItem("nav");
    const value = JSON.parse(saved);
    return value || false;
  });
  const [totalCal, setTotalCal] = useState(() => {
    const saved = localStorage.getItem("calories");
    const value = JSON.parse(saved);
    return value || 0;
  });
  const [totalStep, setTotalStep] = useState(() => {
    const saved = localStorage.getItem("step");
    const value = JSON.parse(saved);
    return value || 0;
  });
  const [previousDate, setPreviousDate] = useState(() => {
    const saved = localStorage.getItem("datelist");
    const value = JSON.parse(saved);
    return value || [];
  });
  //calories useeffect
  useEffect(() => {
    localStorage.setItem("calories", JSON.stringify(totalCal));
    localStorage.setItem("step", JSON.stringify(totalStep));
  }, [totalCal]);

  //Local Storage
  useEffect(() => {
    localStorage.setItem("join", JSON.stringify(joined));
    localStorage.setItem("nav", JSON.stringify(changeNav));
  }, [joined]);
  //Local Storage
  useEffect(() => {
    localStorage.setItem("datelist", JSON.stringify(previousDate));
  }, []);
  //=====get date
  const todayDate = new Date();
  const date =
    todayDate.getFullYear() +
    "-" +
    (todayDate.getMonth() + 1) +
    "-" +
    todayDate.getDate();

  const [todayDay, setTodayDay] = useState("");
  const day = todayDate.getDay();
  //=======get Daily Activities
  const [dailyActivity, setDailyActivity] = useState([]);
  const getActivity = () => {
    axios
      .get(`http://localhost:5000/activity/`)
      .then((res) => {
        setDailyActivity(res.data);
        switch (day) {
          case 0:
            setTodayDay("Sunday");
            break;
          case 1:
            setTodayDay("Monday");
            break;
          case 2:
            setTodayDay("Tuesday");
            break;
          case 3:
            setTodayDay("Wednesday");
            break;
          case 4:
            setTodayDay("Thursday");
            break;
          case 5:
            setTodayDay("Friday");
            break;
          case 6:
            setTodayDay("Saturday");
            break;
          default:
            break;
        }
      })
      .catch((err) => alert("ActivityFetch", err));
  };
  //userActivity
  useEffect(() => {
    getActivity();
    getDate();
  }, []);
  // console.log("dailyActivity", dailyActivity);
  //previous date

  const getDate = () => {
    console.log("hello");
    const found = previousDate.find((el) => el.date === date);
    console.log("found", found);
    if (!found) {
      setTotalStep(0);
      setTotalCal(0);
      previousDate.push({ date: date });
      setPreviousDate(previousDate);
    }
  };

  return (
    <div>
      <JoinContext.Provider
        value={{
          userjoin: joined,
          setUserJoin: setJoined,
          navChange: changeNav,
          setNavChange: setChangeNAv,
          calor: totalCal,
          setCal: setTotalCal,
          setUserActivity: setDailyActivity,
          userActivity: dailyActivity,
          today: todayDay,
          step: totalStep,
          setStep: setTotalStep,
          dateList: previousDate,
        }}
      >
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<JoinNow />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report" element={<ActivityReport />} />
        </Routes>
        <Footer />
      </JoinContext.Provider>
    </div>
  );
}

export default Main;
