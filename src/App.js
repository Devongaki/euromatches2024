// src/App.js
import React, { useEffect, useState } from "react";
import { fetchAllMatches } from "./api/FetchAllMatches";
import { groupMatchesByDate } from "./utils/groupMatchesByDate";
import DateGroup from "./component/DateGroup/DateGroup";

const App = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMatches = async () => {
      try {
        const fetchedMatches = await fetchAllMatches();
        const groupedMatches = groupMatchesByDate(fetchedMatches);
        setMatches(groupedMatches);
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
      {Object.entries(matches).map(([date, matchGroups], index) => (
        <DateGroup key={index} date={date} matches={matchGroups} />
      ))}
    </div>
  );
};

export default App;
