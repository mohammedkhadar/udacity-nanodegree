/**
 * @author mohammed.khan.cmr@gmail.com (Mohammed Khadar Khan A)
 */

/**
 * Iterates through the localizedRuleNames in ruleResults and returns an array
 *    of their strings.
 * @param {Object} results psiResults object.
 * @return {Array.<string>} Returns localizedRuleNames in ruleResults.
 */
function ruleList(results) {
  var localizedRuleNames = [];
  var ruleResults = results.formattedResults.ruleResults;

  if (isObject(ruleResults)) {
    for (var rule in ruleResults) {
      localizedRuleNames.push(ruleResults[rule].localizedRuleName);
    }
  }
  return localizedRuleNames;
}

/**
 * Iterates through pageStats in the psiResults object and returns the total
 *    number of bytes to load the website.
 * @param {Object} results psiResults object.
 * @return {number} Returns total number of bytes to load the website.
 */
function totalBytes(results) {
  var total = 0;
  var pageStats = results.pageStats;

  if (isObject(pageStats)) {
    for (var stat in pageStats) {
      if (stat.indexOf('Bytes') > -1) total += parseInt(pageStats[stat]);
    }
  }
  return total;
}

/**
 * Helper function to determine whether a value is of type 'Object'.
 * @param {*} o value to be checked for 'Object' type.
 * @return {boolean} Returns true only if value is of 'Object' type.
 */
function isObject(o) {
  return typeof o === 'object' ? true : false;
}
