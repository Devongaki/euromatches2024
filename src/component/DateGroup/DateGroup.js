// src/components/DateGroup.js
import React from "react";
import "./DateGroup.css";
import { format } from "date-fns";
import { getMatchStatus } from "../../utils/matchStatusMapper";

const DateGroup = ({ date, matches, groupName = [] }) => {
  const formattedDate = format(new Date(date), "EEEE dd MMMM yyy");
  return (
    <div className="date-group">
      <h2 className="date-group-heading">{formattedDate}</h2>
      <div className="date-group-item">
        {matches.map((match, index) => (
          <div key={index} className="match">
            <p>{match.groupName}</p>
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
    </div>
  );
};

export default DateGroup;
