import React, { useState, useEffect } from "react";
import MatchList from "./component/MatchList/MatchList";
import { fetchAllMatches } from "./utils";

function App() {
  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMatches = async () => {
      try {
        const allMatches = await fetchAllMatches();
        setMatches(allMatches);
      } catch (err) {
        setError("Failed to fetch matches. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    loadMatches();
  }, []);

  if (isLoading) return <div>Loading matches...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="App">
      <h1>Euro 2024 Group Stage Matches</h1>
      <MatchList matches={matches} />
    </div>
  );
}

export default App;
