const _ = require("lodash")


/**
 * populate between two array.
 * @param {Array} originalArray - data need to populate.
 * @param {Array} populateArray - The reference key we have.
 * @param {String} key - the selected key need to populate
 * @param {String} populateKey - the populate array Key
 * @param {Boolean} isNumber -  Value for populate is Number
 */
function mhPopulate(originalArray, populateArray, key, populateKey, isNumber = false) {

    //convert Array to stringify
    var originalArrayStr = JSON.stringify(originalArray);

    // mapperArray keyBy specific key
    let mapperArrayKeyBy = _.keyBy(populateArray, populateKey);

    let result = originalArrayStr;
    let regex;
    for (let k in mapperArrayKeyBy) {

        if (isNumber) {
            regex = new RegExp(`(["'])${key}+(["']):\\s?${k}\\b\\s?`, 'g');
        } else {
            regex = new RegExp(`(["'])${key}+(["']):\\s?(["']?)${k}(["']?)?\\s?`, 'g');
        }
        result = result.replace(regex, `"${key}":${JSON.stringify(mapperArrayKeyBy[k])}`);
    }
    return JSON.parse(result);
}

module.exports = mhPopulate
