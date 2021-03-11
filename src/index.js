
// You should implement your task here.

module.exports = function towelSort (matrix=[]) {
  let array = [];
  matrix.forEach((item, index)=>{
    let val = (index%2==0) ? item.slice() : item.reverse().slice();
    array.push(...val);
  })
  return array;
}
