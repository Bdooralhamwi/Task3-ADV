// import React from 'react'
import "./Colser.css"
export default function Closer() {
  return (
    <div className="bablic">
      <div className="closer-componant">
        <img className="back" src="./public/images/property-02.jpg" alt="property-02" />
        <div className="content">
          <div className="blur">
            <div className="container">
              <div className="up">
                <h1>| VIDEO VIEW</h1>
                <h2>Get Closer View & Different Feeling</h2>
              </div>
              <div className="center">
                <img src="/images/video-frame.jpg" alt="video-frame" />
                <div className="play">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="bi bi-play-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                  </svg>
                </div>
              </div>
              <div className="down">
                <div className="card">
                  <span>34</span>
                  <p>
                    Bulidings
                    <br /> Finished Now
                  </p>
                </div>
                <div className="card">
                  <span>12</span>
                  <p>Years <br /> Experience</p>
                </div>
                <div className="card">
                  <span>24</span>
                  <p>Awwards <br /> won 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
