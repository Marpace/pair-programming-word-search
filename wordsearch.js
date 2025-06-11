const wordSearch = (letters, word) => { 
    if (letters.length === 0) return false;

    //this is making each row into one string with join() and 
    // then checking if the word is in that string
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word) || l.split("").reverse().join("").includes(word)) {
            return true
        }
    }

    const transposed = transpose(letters);
    const verticalJoin = transposed.map(ls => ls.join(""));
    for (let line of verticalJoin) {
        if (line.includes(word) || line.split("").reverse().join("").includes(word)) {
            return true
        }
    }

    return false;
};

const transpose = function(matrix){
  const rows = matrix.length
  const columns = matrix[0].length
  const result = []

  for (let i=0; i < columns; i++){
    result[i] =[];
    for (let j = 0; j < rows; j++){
      result[i][j] = matrix [j][i]
    }
  }
  return result
  }



module.exports = wordSearch
