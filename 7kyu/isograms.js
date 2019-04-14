// https://www.codewars.com/kata/isograms

function isIsogram(str) {
  let matches = [];

  if (str.length === 0) return true;

  for (let i = 0; i < str.length; i++) {
    if (matches.includes(str[i].toLowerCase())) {
      return false;
    } else {
      matches.push(str[i].toLowerCase());
    }
  }
  return true;
}
