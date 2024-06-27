// src/components/DateGroup.js
import React from "react";
import "./DateGroup.css";
import { getMatchStatus } from "../../utils/matchStatusMapper";

const DateGroup = ({ date, matches = [] }) => {
  return (
    <div className="date-group">
      <h2 className="date-group-heading">{date}</h2>
      {matches.map((match, index) => (
        <div key={index} className="match">
          <p className="match-results">
            {match.homeTeam.name}{" "}
            <span className="match-results-score">
              {match.result.homeScore90}
            </span>
          </p>
          <p className="match-results">
            {match.awayTeam.name}{" "}
            <span className="match-results-score">
              {match.result.awayScore90}
            </span>
          </p>
          <p className="match-status-ongoing">
            Status: {getMatchStatus(match.matchStatusId)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DateGroup;
