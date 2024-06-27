// src/App.js
import React, { useEffect, useState } from "react";
import { fetchAllMatches } from "./api/FetchAllMatches";

const App = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMatches = async () => {
      try {
        const fetchedMatches = await fetchAllMatches();
        setMatches(fetchedMatches);
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
      {matches.map((match, index) => (
        <div key={index}>
          <p>Match ID: {match.id}</p>
          <p>Home Team: {match.homeTeam.name}</p>
          <p>Away Team: {match.awayTeam.name}</p>
          <p>Date: {match.lastUpdated}</p>
          <p>Stadium: {match.stadium.name}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
