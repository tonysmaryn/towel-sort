
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (typeof(matrix) === 'undefined' || matrix.length === 0){
      return [];
  }
  let result = [];
  matrix.map((x, index) => {
    if (index % 2 === 0){
        result = result.concat(x);
    } else {
        result = result.concat(x.reverse());
    }
  });
  return result;
}
