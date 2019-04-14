//https://www.codewars.com/kata/create-phone-number

function createPhoneNumber(numbers) {
  return (
    "(" +
    `${numbers[0]}` +
    `${numbers[1]}` +
    `${numbers[2]}` +
    ") " +
    `${numbers[3]}` +
    `${numbers[4]}` +
    `${numbers[5]}` +
    "-" +
    `${numbers[6]}` +
    `${numbers[7]}` +
    `${numbers[8]}` +
    `${numbers[9]}`
  );
}

// The most amazin solution!
function createPhoneNumber(numbers) {
  numbers.reduce((acc, cur) => {
    return acc.replace("x", cur);
  }, "(xxx) xxx-xxxx");
}
