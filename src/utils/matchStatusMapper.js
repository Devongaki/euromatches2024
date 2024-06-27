export const getMatchStatus = (matchStatusId) => {
  const statusMap = {
    1: "Played",
    2: "Not started",
    3: "Postponed",
    4: "Abandoned",
    5: "Will not be played",
    6: "Date not set",
    7: "Ongoing",
  };

  return statusMap[matchStatusId] || "Unknown status";
};
