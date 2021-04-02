const _ = require("lodash")

/**
 * populate between two array.
 * @param {Array} originalArray - data need to populate.
 * @param {Array} populateArray - The reference key we have.
 * @param {String} key - the selected key need to populate
 */
function mhPopulate(originalArray, populateArray, key) {

    //convert Array to stringify
    var originalArrayStr = JSON.stringify(originalArray);

    // mapperArray keyBy specific key
    let mapperArrayKeyBy = _.keyBy(mapperArray, key);

    let result = originalArrayStr;

    for (let k in mapperArrayKeyBy) {
        let regex = new RegExp(`(["'])${key}+(["']):\\s?(["']?)${k}(["']?)?\\s?`, 'g');
        result = result.replace(regex, `"${key}":${JSON.stringify(mapperArrayKeyBy[k])}`);
    }

    return JSON.parse(result);
}

module.exports = mhPopulate
