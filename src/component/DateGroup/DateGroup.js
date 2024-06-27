import React from "react";
import "./DateGroup.css";
import { format } from "date-fns";
import { getMatchStatus } from "../../utils/matchStatusMapper";

const DateGroup = ({ date, matches = [] }) => {
  const formattedDate = format(new Date(date), "EEEE dd MMMM yyyy");

  // Sort matches by timestamp in ascending order
  matches.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  return (
    <div className="date-group">
      <h2 className="date-group-heading">{formattedDate}</h2>
      <div className="date-group-item">
        {matches.map((match, index) => (
          <div key={index} className="match">
            <p className="group-name">{match.groupName}</p>
            <div className="match-results">
              <img
                src={match.homeTeam.logo.url}
                alt={`${match.homeTeam.name} logo`}
                className="team-logo"
              />
              {match.homeTeam.name}{" "}
              <span className="match-results-score">
                {match.result.homeScore90}
              </span>
            </div>
            <div className="match-results">
              <img
                src={match.awayTeam.logo.url}
                alt={`${match.awayTeam.name} logo`}
                className="team-logo"
              />
              {match.awayTeam.name}{" "}
              <span className="match-results-score">
                {match.result.awayScore90}
              </span>
            </div>
            {match.matchStatusId === 2 ? (
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
