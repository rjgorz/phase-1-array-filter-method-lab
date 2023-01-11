// Code your solution here
function findMatching(arr, search) {
    return arr.filter(
      (match) => match.toLowerCase() === search.toLowerCase()
    );
  }
  
  function fuzzyMatch(arr, string) {
    return arr.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0
    );
  }
  
  function matchName(arr, nameSearch) {
    return arr.filter((record) => record.name === nameSearch);
  }
  