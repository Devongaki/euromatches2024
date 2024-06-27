import React from "react";
import "./DateGroup.css";
import "./DateGroup.css"
import { getMatchStatus } from "../../utils/matchStatusMapper";

const DateGroup = ({ date, matches }) => {
  const { ongoing, finished } = matches;

  return (
    <div className="date-group">
      <h2 className="date-group-heading">{date}</h2>
      <h3>Ongoing Matches</h3>
      {ongoing.length > 0 ? (
        ongoing.map((match, index) => (
          <div key={index} className="match">
            <p>Match: {match.name}</p>
            <p className="match-status-ongoing">
              Status: {getMatchStatus(match.matchStatusId)}
            </p>
            <p>
              Result: {match.homeTeam.name} {match.result.homeScore90} -{" "}
              {match.awayTeam.name} {match.result.awayScore90}
            </p>
            <p>Scores: Ongoing</p>
          </div>
        ))
      ) : (
        <p>No ongoing matches.</p>
      )}

      <h3>Finished Matches</h3>
      {finished.length > 0 ? (
        finished.map((match, index) => (
          <div key={index} className="match">
            <p>Match: {match.name}</p>
          </div>
        ))
      ) : (
        <p>No finished matches.</p>
      )}
    </div>
  );
};

export default DateGroup;
