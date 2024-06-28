import React from "react";
import "./DateGroup.css";
import { format } from "date-fns";
import MatchInfo from "../MatchInfo/MatchInfo";

// Component to group matches by date
const DateGroup = ({ date, matches = [] }) => {
  // Formating the date
  const formattedDate = format(new Date(date), "EEEE dd MMMM yyyy");

  // Sort matches by timestamp in ascending order
  matches.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  return (
    <div className="date-group">
      <h2 className="date-group-heading">{formattedDate}</h2>
      <div className="date-group-item">
        {matches.map((match, index) => (
          // Render each match using the MatchInfo component
          <MatchInfo key={index} match={match} />
        ))}
      </div>
    </div>
  );
};

export default DateGroup;
