export async function fetchAllMatches() {
  const groupIds = {
    "Group A": 691296,
    "Group B": 691297,
    "Group C": 691300,
    "Group D": 691298,
    "Group E": 691299,
    "Group F": 691301,
  };
  const allMatches = [];
  console.log(allMatches)
  for (const [groupName, groupId] of Object.entries(groupIds)) {
    try {
      const response = await fetch(
        `https://api.nifs.no/stages/${groupId}/matches/`
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      console.log(data);
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
