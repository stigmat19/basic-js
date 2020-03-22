module.exports = function countCats(matrix) {

  console.log('-----matrix', matrix);

  let count = 0;

  for(let i = 0; i < matrix.length; i++){
    for (let k = 0; k < matrix[i].length; k++){
      if(matrix[i][k] === '^^'){
        count++;
      }
    }
  }

  return count;

};
