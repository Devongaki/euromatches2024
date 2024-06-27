// src/App.js
import React, { useEffect, useState } from "react";
import "./App.css"
import { fetchAllMatches } from "./api/FetchAllMatches";
import DateGroup from "./component/DateGroup/DateGroup";

const App = () => {
  const [matchesByDate, setMatchesByDate] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMatches = async () => {
      try {
        const fetchedMatches = await fetchAllMatches();
        const groupedMatches = groupMatchesByDate(fetchedMatches);
        setMatchesByDate(groupedMatches);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadMatches();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {Object.entries(matchesByDate).map(([date, matches], index) => (
        <DateGroup key={index} date={date} matches={matches} />
      ))}
    </div>
  );
};

const groupMatchesByDate = (matches) => {
  return matches.reduce((acc, match) => {
    const date = match.timestamp.split("T")[0]; // Assuming the timestamp format is ISO 8601
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(match);
    return acc;
  }, {});
};

export default App;
