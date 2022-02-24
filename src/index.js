module.exports = function reverse (n) {
    let reverseNum = n.toString().split('').reverse().join('');
    return parseInt(reverseNum);
}
