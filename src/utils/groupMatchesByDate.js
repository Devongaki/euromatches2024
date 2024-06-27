export const groupMatchesByDate = (matches) => {
  return matches.reduce((acc, match) => {
    const date = new Date(match.lastUpdated).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date].push(match);
    return acc;
  }, {});
};
