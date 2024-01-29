import React from "react";
import { useSelector } from "react-redux";
const Counter = (props) => {
  const { increment, decrement, total } = props;

  const incr = () => {
    increment();
    props.apiTestcall(total.total);
  };
  const dec = () => {
    decrement();
    props.apiTestcall(total.total);
  };

  return (
    <>
      <div className="counter-wrapper">
        <input
          type="button"
          value="+"
          className="btn btn-primary"
          onClick={incr}
        />
        <span>{total.total} </span>
        <input
          type="button"
          value="-"
          className="btn btn-secondary"
          onClick={dec}
        />
        <button onClick={() => props.apiTestcall(total.total)}>API TEST</button>
      </div>
    </>
  );
};

export default Counter;
