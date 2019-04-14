//https://www.codewars.com/kata/playing-with-digits

function digPow(n, p) {
  function numAsArray(num) {
    num = num.toString();
    let array = [];
    for (let i = 0; i < num.length; i++) {
      array.push(parseInt(num[i]));
    }
    return array;
  }

  const arr = numAsArray(n);
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += Math.pow(arr[i], p + i);
  }

  let ans = result / n;
  if (Math.floor(ans) === ans) {
    return ans;
  } else return -1;
}

console.log(digPow(92, 1));
