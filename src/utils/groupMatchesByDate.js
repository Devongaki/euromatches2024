export const groupMatchesByDate = (matches) => {
  return matches.reduce((acc, match) => {
    const date = new Date(match.timestamp).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = { ongoing: [], finished: [] };
    }
    if (match.matchStatusId === 1) {
      acc[date].ongoing.push(match);
    } else {
      acc[date].finished.push(match);
    }
    return acc;
  }, {});
};
