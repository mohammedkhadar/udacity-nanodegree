/**
 * @author mohammed.khan.cmr@gmail.com (Mohammed Khadar Khan A)
 */

/**
 * Sorts an array of names(strings) in alphabetical order in the format
 *    <lastname>, <firstname>.
 * @param {Array.<string>} names Array of names to be aphabetized, in
 *     <firstname> <lastname> format.
 * @return {Array.<string>} Array of names in alphabetical order, in
 *    <lastname>, <firstname> format.
 */
function alphabetizer(names) {
  /**
   * Helper function to split the name in lastname, firstname format.
   * @param {string} name Name in <firstname> <lastname> format.
   * @return {string} Returns name in <lastname>, <firstname> format.
   *    format lastname, firstname.
   */
  var splitName = function(name) {
    var temp = name.trim().split(' ');
    return temp[1] + ', ' + temp[0];
  };

  var alphabetizedNames = [];
  for (var i = 0; i < names.length; i++) {
    alphabetizedNames.push(splitName(names[i]));
  }
  return alphabetizedNames.sort();
}
