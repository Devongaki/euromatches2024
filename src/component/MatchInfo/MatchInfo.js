import React from "react";
import { format } from "date-fns";
import { getMatchStatus } from "../../utils/matchStatusMapper";

// Consolidated component for rendering match information
const MatchInfo = ({ match }) => {
  const now = new Date();
  const matchTime = match.matchStart
    ? new Date(match.matchStart)
    : match.date
    ? new Date(match.date)
    : new Date(match.timestamp);
  let matchStatus;

  if (matchTime > now) {
    matchStatus = "Scheduled";
  } else if (match.status === "FINISHED" || match.matchStatusId === 1) {
    matchStatus = "Finished";
  } else if (match.matchStatusId === 7) {
    matchStatus = "Ongoing";
  } else {
    matchStatus = getMatchStatus(match.matchStatusId);
  }

  return (
    <div className="match">
      <p className="group-name">
        {match.stage?.name || match.groupName || "N/A"}
      </p>
      <div className="match-results">
        <img
          src={match.homeTeam.logo.url}
          alt={`${match.homeTeam.name} logo`}
          className="team-logo"
        />
        {match.homeTeam.name}{" "}
        <span className="match-results-score">
          {match.result?.homeScore90 || match.homeScore?.fullTime || 0}
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
          {match.result?.awayScore90 || match.awayScore?.fullTime || 0}
        </span>
      </div>
      {matchStatus === "Scheduled" ? (
        <p className="match-status-scheduled">
          Status:{" "}
          <span>Scheduled {format(matchTime, "EEEE dd MMMM yyyy, HH:mm")}</span>
        </p>
      ) : matchStatus === "Ongoing" ? (
        <p className="match-status-ongoing">
          Status: <span>Ongoing</span>
        </p>
      ) : (
        <p className="match-status-done">
          Status: <span>Finished</span>
        </p>
      )}
      <p className="match-stadium">Stadium: {match.stadium?.name || "TBA"}</p>
    </div>
  );
};

export default MatchInfo;
