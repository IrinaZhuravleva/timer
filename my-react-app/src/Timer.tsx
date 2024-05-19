import { useState, useRef } from "react";
import Second3 from "./components/Second";
import Minute3 from "./components/Minute";
import Hour3 from './components/Hour';

export default function Timer3() {
  const [timer, setTimer] = useState(0);
  const countRef = useRef(0);
  const [timeSpeed] = useState(10);

  function Start() {
    countRef.current = setInterval(() => {
      setTimer((prevCount) => {
        return prevCount + 1;
      });
    }, timeSpeed);
  }

  function Pause() {
    clearInterval(countRef.current);
  }

  function Reset() {
    setTimer(0);
    clearInterval(countRef.current);
  }

  return (
    <>
      <div>
        <Hour3 timer={timer} />:<Minute3 timer={timer} />:
        <Second3 timer={timer} />
      </div>
      <div>
        <button onClick={Start}>Start</button>
        <button onClick={Pause}>Pause</button>
        <button onClick={Reset}>Reset</button>
      </div>
    </>
  );
}
