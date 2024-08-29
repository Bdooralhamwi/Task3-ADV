// import React from 'react'
import Accordion from "../Accrodion/Accrodion"
import "./Appartment.css"

export default function Appartment() {
  return (
    <div className="appartment-container">
        <div className="column col-1">
            <div className="content">
                <img className="featured" src="/images/featured.jpg" alt="featured" />
                <div className="icon-img-featured">
                <img className="featured-icon" src="/images/featured-icon.png" alt="featured-icon" />
                </div>
            </div>
        </div>
        <div className="column col-2">
            <div className="content">
                <div className="up">
                    <h2>| FEATURED</h2>
                    <h2>
                        Best Appartment & Sea View
                    </h2>
                </div>
                <div className="down">
                    <div className="card">
                        <div className="column">
                            <span>Best useful links ?</span>
                        </div>
                        <div className="column center">
                            <p className="p" 
                                
                            >Get <b>the best villa</b> website teamplate in HTML CSS and Bootstrap for you business. TemplateMo provides you the <span className="blue">best free CSS templates</span> in the world. Please tell our friends about it.</p>
                           <Accordion 
        title="How does this work ?" 
        content="Content for section 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
      />
                        </div>
                        <div className="column end">
                        <Accordion 
        title="Why is Villa Agency the best ?" 
        content="Content for section 2. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." 
      />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="column col-3">
            <div className="content">
                <div className="column-3">
                    <img src="/images/info-icon-01.png" alt="info-icon-01" />
                    <div className="category">
                        <span>250 m2</span>
                        <p>Total Flat Space</p>
                    </div>
                </div>
                <div className="column-3">
                <img src="/images/info-icon-02.png" alt="info-icon-02" />
                    <div className="category">
                        <span>Contract</span>
                        <p>Contract Ready</p>
                    </div>
                </div>
                <div className="column-3">
                    <div className="col-3-img">
                    <img src="/images/info-icon-03.png" alt="info-icon-03" />
                    <p className="img-p">Process</p>
                    </div>
                    <div className="category">
                        <span>Payment</span>
                        <p>Payment</p>
                    </div>
                </div>
                <div className="column-3">
                <div className="col-3-img">
                <img src="/images/info-icon-04.png" alt="info-icon-04" />
                <p className="img-p">Control</p>
                </div>
                    <div className="category">
                        <span>safety</span>
                        <p>24/7 Under</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
