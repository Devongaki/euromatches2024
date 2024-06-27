import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchAllMatches } from "./api/FetchAllMatches";
import DateGroup from "./component/DateGroup/DateGroup";
import Header from "./component/Header/Header";

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

  // Sort the dates in ascending order
  const sortedDates = Object.keys(matchesByDate).sort(
    (a, b) => new Date(a) - new Date(b)
  );

  return (
    <div>
      <Header />
      {sortedDates.map((date, index) => (
        <DateGroup key={index} date={date} matches={matchesByDate[date]} />
      ))}
    </div>
  );
};

const groupMatchesByDate = (matches) => {
  return matches.reduce((dateGroup, match) => {
    const date = match.timestamp.split("T")[0];
    if (!dateGroup[date]) {
      dateGroup[date] = [];
    }
    dateGroup[date].push(match);
    return dateGroup;
  }, {});
};

export default App;
