// This function fetches all match data for different groups from a specified API.
export async function fetchAllMatches() {
  // Object containing group names as keys and their corresponding group IDs as values.
  const groupIds = {
    "Group A": 691296,
    "Group B": 691297,
    "Group C": 691300,
    "Group D": 691298,
    "Group E": 691299,
    "Group F": 691301,
  };

  // Array to store the matches from all groups.
  const allMatches = [];
  console.log(allMatches);
  // Iterating over each group in the groupIds object.
  for (const [groupName, groupId] of Object.entries(groupIds)) {
    try {
      // Fetch match data for the current group using its group ID.
      const response = await fetch(
        `https://api.nifs.no/stages/${groupId}/matches/`
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      console.log(data);
      // Check if the data is an array.
      if (Array.isArray(data)) {
        allMatches.push(...data.map((match) => ({ ...match, groupName })));
      } else {
        console.warn(`Unexpected data structure for group ${groupName}`, data);
      }
    } catch (error) {
      console.error(`Error fetching matches for group ${groupName}:`, error);
    }
  }

  return allMatches;
}
