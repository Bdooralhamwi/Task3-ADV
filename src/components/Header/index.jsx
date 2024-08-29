import {
  CalendarTodayRounded,
  EmailRounded,
  FacebookRounded,
  Instagram,
  LinkedIn,
  MapRounded,
  Twitter,
} from "@mui/icons-material";
import "./header.css";
import { useState } from "react";

const Header = () => {
  const [zdex, setZindex] = useState(-100);
  const [x, setX] = useState(0);

  const open = () => {
    setX(1);
    setZindex(100);
  };

  const close = () => {
    setX(0);
    setZindex(-100);
  };
  const path = window.location.pathname
  console.log(path)
  return (
    <>
      <div className="top-header">
        <div className="container-top">
          <div className="left">
            <a href="#">
              <EmailRounded />
              info@company.com
            </a>
            <div className="divider"></div>
            <a href="#">
              <MapRounded />
              Sunny Isles Beach, FL 33160
            </a>
          </div>
          <div className="right">
            <a href="#">
              <FacebookRounded />
            </a>
            <a href="#">
              <Twitter />
            </a>
            <a href="#">
              <LinkedIn />
            </a>
            <a href="#">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
      <header>
        <div className="container">
          <a href="#" className="logo">
            VILLA
          </a>
          <div className="links">
            <a href="/"className={path === "/"? 'a-active' : ''}>Home</a>
            <a href="Properties"className={path === "/Properties"? 'a-active' : ''}>Properties</a>
            <a href="/Proporty-Details" className={path === "/Proporty-Details"? 'a-active' : ''}>Property Details</a>
            <a href="/Contactus" className={path === "/Contactus"? 'a-active' : ''}>Contact Us</a>
            <a href="" className="schadule">
              <div>
                <CalendarTodayRounded />
              </div>
              Schadule a visit
            </a>
          </div>
          <svg
            onClick={open}
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
        <div style={{ opacity: x, zIndex: zdex }} className="fixd">
          <div className="continar">
            <div className="close">
              <svg
                onClick={close}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </div>
            <ul>
              <li>
            <a href="/"className={path === "/"? 'a-active' : ''}>Home</a>
              </li>
              <li>
            <a href="/Properties" className={path === "/Properties"? 'a-active' : ''}>Properties</a>
              </li>
              <li>
            <a href="Proporty-Details"className={path === "/Proporty-Details"? 'a-active' : ''}>Property Details</a>
              </li>
              <li>
            <a href="/Contactus" className={path === "/Contactus"? 'a-active' : ''}>Contact Us</a>
              </li>
              <li>
                <button style={{ cursor: "pointer" }}>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-calendar"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                    </svg>
                  </div>
                  <p style={{ fontWeight: "bold" }}>Schadule a visit</p>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
