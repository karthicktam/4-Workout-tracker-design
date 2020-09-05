// Dribbble shot: https://dribbble.com/shots/2497702-Daily-UI-challenge-041-Workout-Tracker -->
import React from "react";
import {
  faTimes,
  faArrowRight,
  faCircle,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <img
        className="lifter"
        src="https://image.flaticon.com/icons/svg/1731/1731457.svg"
        alt="Lifter"
      />
      <div className="workout-info">
        <h1>Lift Weights</h1>
        <ul>
          <li>
            <h2>
              1 <small>set</small>{" "}
              <FontAwesomeIcon className="icon" icon={faArrowRight} /> 50{" "}
              <small>kg</small>{" "}
              <FontAwesomeIcon className="icon" icon={faTimes} /> 15{" "}
              <small>reps</small>{" "}
              <FontAwesomeIcon className="icon check" icon={faCheck} />
            </h2>
          </li>
          <li>
            <h2>
              2 <small>set</small>{" "}
              <FontAwesomeIcon className="icon" icon={faArrowRight} /> 55{" "}
              <small>kg</small>{" "}
              <FontAwesomeIcon className="icon" icon={faTimes} /> 12{" "}
              <small>reps</small>{" "}
              <FontAwesomeIcon className="icon check" icon={faCheck} />
            </h2>
          </li>
          <li className="active">
            <h2>
              3 <small>set</small>{" "}
              <FontAwesomeIcon className="icon" icon={faArrowRight} /> 60{" "}
              <small>kg</small>{" "}
              <FontAwesomeIcon className="icon" icon={faTimes} /> 10{" "}
              <small>reps</small>{" "}
              <FontAwesomeIcon className="icon circle" icon={faCircle} />
            </h2>
          </li>
          <li>
            <h2>
              4 <small>set</small>{" "}
              <FontAwesomeIcon className="icon" icon={faArrowRight} /> 65{" "}
              <small>kg</small>{" "}
              <FontAwesomeIcon className="icon" icon={faTimes} /> 8{" "}
              <small>reps</small>
            </h2>
          </li>
        </ul>
      </div>
    </div>
  );
}
