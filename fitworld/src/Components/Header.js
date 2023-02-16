import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { JoinContext } from "./Main";

function Header() {
  const { navChange, userjoin } = useContext(JoinContext);
  // console.log("usersss", userjoin);
  return (
    <div>
      {!navChange ? (
        <div>
          <header className="header">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="header_content d-flex flex-row align-items-center justify-content-start trans_400">
                    <Link to="/">
                      <div className="logo d-flex flex-row align-items-center justify-content-start">
                        <img src="images/dot.png" alt="" />

                        <div>
                          Fit<span>World</span>
                        </div>
                      </div>
                    </Link>
                    <nav className="main_nav">
                      <ul className="d-flex flex-row align-items-center justify-content-start">
                        <li className="active">
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About us</Link>
                        </li>
                        <li>
                          <Link to="/service">Services</Link>
                        </li>
                        <li>
                          <Link to="/team">Team</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                    <div className="phone d-flex flex-row align-items-center justify-content-start ml-auto">
                      <div>
                        {" "}
                        <Link to="/join">Join Us</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* Hamburger */}
          <div className="hamburger_bar trans_400 d-flex flex-row align-items-center justify-content-start">
            <div className="hamburger">
              <div className="menu_toggle d-flex flex-row align-items-center justify-content-start">
                <span>menu</span>
                <div className="hamburger_container">
                  <div className="menu_hamburger">
                    <div
                      className="line_1 hamburger_lines"
                      style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                    />
                    <div
                      className="line_2 hamburger_lines"
                      style={{ visibility: "inherit", opacity: 1 }}
                    />
                    <div
                      className="line_3 hamburger_lines"
                      style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Menu */}
          <div className="menu trans_800">
            <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/service">Services</Link>
                </li>
                <li>
                  <Link to="/team">Team</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="menu_phone d-flex flex-row align-items-center justify-content-start">
              <span id="link1">
                <Link to="/join">Join Us</Link>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <header className="header">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="header_content d-flex flex-row align-items-center justify-content-start trans_400">
                    <Link to="/">
                      <div className="logo d-flex flex-row align-items-center justify-content-start">
                        <img src="images/dot.png" alt="" />

                        <div>
                          Fit<span>World</span>
                        </div>
                      </div>
                    </Link>
                    <nav className="main_nav">
                      <ul className="d-flex flex-row align-items-center justify-content-start">
                        <li className="active">
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/dashboard">Dashboard</Link>
                        </li>

                        <li>
                          <Link to="/report">Weekly Report</Link>
                        </li>
                        <li>
                          <Link to="/service">Services</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                    <div className="phone d-flex flex-row align-items-center justify-content-start ml-auto">
                      <div id="link1">{userjoin[0].name}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* Hamburger */}
          <div className="hamburger_bar trans_400 d-flex flex-row align-items-center justify-content-start">
            <div className="hamburger">
              <div className="menu_toggle d-flex flex-row align-items-center justify-content-start">
                <span>menu</span>
                <div className="hamburger_container">
                  <div className="menu_hamburger">
                    <div
                      className="line_1 hamburger_lines"
                      style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                    />
                    <div
                      className="line_2 hamburger_lines"
                      style={{ visibility: "inherit", opacity: 1 }}
                    />
                    <div
                      className="line_3 hamburger_lines"
                      style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Menu */}
          <div className="menu trans_800">
            <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>

                <li>
                  <Link to="/report">Weekly Report</Link>
                </li>
                <li>
                  <Link to="/service">Services</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="menu_phone d-flex flex-row align-items-center justify-content-start">
              <span id="link">{userjoin[0].name}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
