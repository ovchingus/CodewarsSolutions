//https://www.codewars.com/kata/number-8-matrices-up-and-down-sorting-for-each-column

function upDownColSort(matrix) {
  let flattened = [].concat(...matrix);

  const row = matrix.length;
  const col = matrix[0].length;

  flattened.sort((a, b) => a - b);

  const reverseNthCol = n => {
    let lp = n;
    let rp = n + row - 1;
    while (lp < rp) {
      let tmp;
      tmp = flattened[lp];
      flattened[lp] = flattened[rp];
      flattened[rp] = tmp;
      lp++;
      rp--;
    }
    return flattened;
  };

  let k = 0;
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (i % 2 === 1 && i !== 0 && j === 0) {
        flattened = reverseNthCol(k);
      }
      matrix[j][i] = flattened[k++];
    }
  }

  return matrix;
}

var m1 = [[-20, -4, -1], [1, 4, 7], [8, 10, 12]];

var m2 = [[1, -1, 4, 1], [7, -20, 12, 0], [8, 10, -4, -3]];

console.log(upDownColSort(m2));
