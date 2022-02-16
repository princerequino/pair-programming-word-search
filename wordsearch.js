const transpose = function (matrix) {
    let rows = matrix.length; 
    let cols = matrix[0].length; 
    let newMatrix = [];
    for (let i = 0; i < cols; i++) { 

        newMatrix[i] = Array(rows); 
      }
      for (let i = 0; i < rows; i++) { 
        for (let j = 0; j < cols; j++) { 

          newMatrix[j][i] = matrix[i][j]
      }
    } 
    return newMatrix;
  };


const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
          return true;

    }
  }

    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for(let m of verticalJoin) {
      if (m.includes(word)) {
        return true;
    }
  }
  return false;
};


module.exports = wordSearch