import React from "react";

function MatchItem({ match }) {
  const matchDate = match.matchStart
    ? new Date(match.matchStart)
    : match.date
    ? new Date(match.date)
    : null;
  const now = new Date();

  let statusDisplay;
  if (matchDate && matchDate > now) {
    statusDisplay = `Starts at ${matchDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  } else if (match.status === "FINISHED") {
    statusDisplay = `Final: ${match.homeScore?.fullTime || 0} - ${
      match.awayScore?.fullTime || 0
    }`;
  } else if (matchDate && matchDate <= now) {
    statusDisplay = `Current: ${match.homeScore?.fullTime || 0} - ${
      match.awayScore?.fullTime || 0
    } (Ongoing)`;
  } else {
    statusDisplay = "Date not available";
  }

  return (
    <div className="MatchItem">
      <p>Group: {match.stage?.name || "N/A"}</p>
      <p>
        Teams: {match.homeTeam?.name || "TBA"} vs{" "}
        {match.awayTeam?.name || "TBA"}
      </p>
      <p>Status: {statusDisplay}</p>
      <p>Stadium: {match.stadium?.name || "TBA"}</p>
    </div>
  );
}

export default MatchItem;
