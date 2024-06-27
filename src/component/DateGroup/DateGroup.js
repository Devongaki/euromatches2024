// src/components/DateGroup.js
import React from "react";

const DateGroup = ({ date, matches }) => {
  return (
    <div>
      <h2>{date}</h2>
      {matches.map((match, index) => (
        <div key={index}>
          <p>Match ID: {match.id}</p>
          <p>Home Team: {match.homeTeam.name}</p>
          <p>Away Team: {match.awayTeam.name}</p>
          <p>Date: {match.date}</p>
        </div>
      ))}
    </div>
  );
};

export default DateGroup;
