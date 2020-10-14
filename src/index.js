
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) {
        return [];
    }
    let arr = [];
    for (i = 0; i < matrix.length; i += 2) {
        if (matrix[i + 1]) {
            let arrRev = matrix[i + 1].reverse();
            arr = arr.concat(matrix[i], arrRev);
        } else {
            arr = arr.concat(matrix[i]);
        }
    }
    return arr;
}
