import React, { useEffect, useState } from "react";
import Modal from "./Modal";

export default function Counter() {
  const [currValue, setCurrValue] = useState(0);
  const [text, setText] = useState("Start");
  const Handler = () => {
    if (text === "Start") setText("Stop");
    else setText("Start");
  };

  useEffect(() => {
    let timer;
    if (text === "Stop")
      timer = setInterval(() => {
        setCurrValue((prev) => prev + 1);
      }, 1000);
    else clearInterval(timer);
    return () => {
      clearInterval(timer);
    };
  }, [text]);
  return (
    <div className="counter w-100 mt-3">
      <button className="btn btn-sm w-100 btn-danger text-light text-center">
        Current Value : {currValue}
      </button>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch Counter
      </button>
      <Modal text={text} Handler={Handler} setCurrValue={setCurrValue} />
    </div>
  );
}
