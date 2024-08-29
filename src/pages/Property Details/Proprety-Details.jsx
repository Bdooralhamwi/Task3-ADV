import React from 'react'
import Accordion from '../../components/Accrodion/Accrodion'
import "./Property.css"
import Beast from '../../components/Beast deal/Beast'
export default function Proprety() {
  return (
    <div>
        <div className="back-photo">
            <span>HOME / PROPERTY DERAILS </span>
            <h1>PROPERTY DERAILS</h1>
        </div>
        <div className="appartment-container-page">
        <div className="column col-1">
            <div className="content">
                <img className="featured" src="/public/images/deal-03.jpg" alt="featured" />
                <div className="column col-2" style={{width:"100%"}}>
            <div className="content">
                <div className="up">
                    <a> Appartment </a>
                    <h2>
                        Best Appartment & Sea View
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit maiores voluptatum, temporibus veniam <br /> dolorem deleniti perspiciatis voluptas velit quaerat ab impedit inventore quisquam cum sequi dolorum soluta suscipit alias.
                    </p>
                </div>
                <div className="down" style={{width:"75%"}}>
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
    <Beast />
    </div>
  )
}
