import React from "react";
import "./DateGroup.css";
import { format } from "date-fns";
import { getMatchStatus } from "../../utils/matchStatusMapper";

const DateGroup = ({ date, matches = [] }) => {
  const formattedDate = format(new Date(date), "EEEE dd MMMM yyyy");

  return (
    <div className="date-group">
      <h2 className="date-group-heading">{formattedDate}</h2>
      <div className="date-group-item">
        {matches.map((match, index) => (
          <div key={index} className="match">
            <p className="group-name">{match.groupName}</p>
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
            {match.matchStatusId === 1 ? (
              <p className="match-status-scheduled">
                Status:{" "}
                <span>
                  Scheduled{" "}
                  {format(
                    new Date(match.timestamp),
                    "EEEE dd MMMM yyyy, HH:mm"
                  )}
                </span>
              </p>
            ) : (
              <p className="match-status-done">
                Status: <span>{getMatchStatus(match.matchStatusId)}</span>
              </p>
            )}

            <p className="match-stadium">Stadium: {match.stadium.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateGroup;
