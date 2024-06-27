// // src/utils/groupMatchesByDate.js
// export function GroupMatchesByDate(matches) {
//   return matches.reduce((grouped, match) => {
//     let date;
//     if (match.timestamp) {
//       date = match.timestamp.split("T")[0];
//     } else if (match.date) {
//       date = match.date.split("T")[0];
//     } else {
//       console.warn("Match without date:", match);
//       date = "Unknown Date";
//     }

//     if (!grouped[date]) {
//       grouped[date] = [];
//     }
//     grouped[date].push(match);
//     return grouped;
//   }, {});
// }
