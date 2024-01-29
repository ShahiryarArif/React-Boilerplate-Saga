import React, { useEffect, useState, useRef } from "react";

function AuctionTimer(props) {
  const [Weeks, setWeeks] = useState("");
  const [Days, setDays] = useState("");
  const [Hours, setHours] = useState("");
  const [Minutes, setMinutes] = useState("");
  let interval = useRef();

  //Timer Function
  const startTimer = () => {
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = props.expiryDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setWeeks(0);
        setDays(0);
        setHours(0);
        setMinutes(0);
      } else {
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        setHours(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setWeeks(Math.floor(days / 7));
        setDays(days % 7);
      }
    }, 10000);
  };
  useEffect(() => {
    startTimer();
  });

  return (
    <>
      <div className="dual-box-right col-12 col-sm-7 ">
        <p className="dual-box-head tv-mb-12 text-center text-sm-start">
          Auction Ends In
        </p>
        <div className="dual-box-timer d-sm-flex justify-content-between">
          <div className="dual-box-sm text-center text-sm-start">
            <h3 className="dual-box-price tv-mb-6">{Weeks}</h3>
            <p className="dual-box-info">Weeks</p>
          </div>
          <div className="dual-box-sm text-center text-sm-start">
            <h3 className="dual-box-price tv-mb-6">{Days}</h3>
            <p className="dual-box-info">Days</p>
          </div>
          <div className="dual-box-sm text-center text-sm-start">
            <h3 className="dual-box-price tv-mb-6">{Hours}</h3>
            <p className="dual-box-info">Hours</p>
          </div>
          <div className="dual-box-sm text-center text-sm-start">
            <h3 className="dual-box-price tv-mb-6">{Minutes}</h3>
            <p className="dual-box-info">Minutes</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default AuctionTimer;
