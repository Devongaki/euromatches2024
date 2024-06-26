export async function fetchAllMatches() {
  const groupIds = [691296, 691297, 691300, 691298, 691299, 691301];
  const allMatches = [];

  for (const groupId of groupIds) {
    try {
      const response = await fetch(
        `https://api.nifs.no/stages/${groupId}/matches/`
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      allMatches.push(...data);
    } catch (error) {
      console.error(`Error fetching matches for group ${groupId}:`, error);
    }
  }

  return allMatches;
}

export function groupMatchesByDate(matches) {
  return matches.reduce((grouped, match) => {
    let date;
    if (match.matchStart) {
      date = match.matchStart.split("T")[0];
    } else if (match.date) {
      date = match.date.split("T")[0];
    } else {
      console.warn("Match without date:", match);
      date = "Unknown Date";
    }

    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(match);
    return grouped;
  }, {});
}
