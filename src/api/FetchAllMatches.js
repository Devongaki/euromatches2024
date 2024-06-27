// src/api/FetchAllMatches.js
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
      console.log(data);
      if (Array.isArray(data)) {
        allMatches.push(...data);
      } else {
        console.warn(`Unexpected data structure for group ${groupId}`, data);
      }
    } catch (error) {
      console.error(`Error fetching matches for group ${groupId}:`, error);
    }
  }

  return allMatches;
}
