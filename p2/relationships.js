/**
 * @author mohammed.khan.cmr@gmail.com (Mohammed Khadar Khan A)
 */

/**
 * Operates on a pair of variables and returns the relationship between them
 *    as string.
 * @param {*} x One of the two values to be compared.
 * @param {*} y One of the two vaules to be compared.
 * @return {string} Result of comparing x,y values.
 */
function getRelationship(x, y) {
  /**
   * Helper function to determine whether a value is of type 'Number'.
   * @param {*} val This is checked for 'Number' type.
   * @return {boolean} Returns true only if value is of 'Number' type.
   */
  var isNum = function(val) {
    return typeof val === 'number' && !isNaN(val);
  };

  if (isNum(x)) {
    if (isNum(y)) {
      return x === y ? '=' : x < y ? '<' : '>';
    } else {
      return 'Can\'t compare relationships because ' + y +
        ' is not a number';
    }
  } else {
    if (isNum(y)) {
      return 'Can\'t compare relationships because ' + x +
        ' is not a number';
    } else {
      return 'Can\'t compare relationships because ' + x + ' and ' + y +
        ' are not numbers';
    }
  }
}
