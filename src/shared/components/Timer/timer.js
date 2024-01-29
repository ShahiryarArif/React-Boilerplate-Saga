import React, { useEffect, useState, useRef } from "react";

function Timer(props) {
  const [time, setTime] = useState("");
  const timerType = props.type
  let interval = useRef();

  //Timer Function
  const startTimer = () => {
      const expiryDate = new Date(props.expiryDate).getTime();
      interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = expiryDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        //stop Timer
        if (distance < 0) {
          clearInterval(interval);
          setTime("Expired");
        } else {
          setTime(`${days} : ${hours} : ${minutes} : ${seconds}`);
        }
      },1000);
  };
  useEffect(() => {
    startTimer();
  });
  const timerSelection=()=>{
    if(timerType==="detailTimer"){
      return(
      <h6 className={`d-inline-block ${time === "Expired" ? "time-end":""} tv-px-12 tv-py-8`}>{time}</h6>
      )
    }
    else{
      return <div>{time}</div>
    }
  }
  return(
    <>
    {timerSelection()}
    </>
  )
}
export default Timer;
