import React from "react";
import { useState, useEffect } from "react";
import "./animation.css";
export default function Animation() {
  // console.log(props.name)
  const [dis, setdis] = useState("none");
  useEffect(() => {
    setTimeout(() => {
      setdis("block");
    }, 0);

    const hideTimeout = setTimeout(() => {
      setdis("none");
    }, 4400);

    // تنظيف التايم أوت عند إلغاء المكون
    return () => clearTimeout(hideTimeout);
  }, []);
  return (
    <div className="conteanr" style={{ display: dis  }}>

    <div className="loder" >
      {/* <h1 className="web">Villa</h1> */}
      <h5>Boudor Alhamwi</h5>
     
      <div className="ring">
      </div>
        <b>loading...</b>
    </div>
    </div>

  );
}
