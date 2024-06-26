import React from "react";
import MatchItem from "../MatchItem/MAtchItem";
import { groupMatchesByDate } from "../../utils";

function MatchList({ matches }) {
  const groupedMatches = groupMatchesByDate(matches);

  return (
    <div className="MatchList">
      {Object.entries(groupedMatches)
        .sort(([dateA], [dateB]) => new Date(dateA) - new Date(dateB))
        .map(([date, matchesOnDate]) => (
          <div key={date} className="MatchGroup">
            <h2>
              {new Date(date).toLocaleDateString([], {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h2>
            {matchesOnDate.map((match) => (
              <MatchItem key={match.id} match={match} />
            ))}
          </div>
        ))}
    </div>
  );
}

export default MatchList;
