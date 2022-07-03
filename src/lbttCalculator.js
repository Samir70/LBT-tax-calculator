const taxBands = [
    // each pair of numbers is [width for bound, rate for bound]
    [145000, 0],
    [105000, 2], // gets to £250000
    [75000, 5], // gets to £325000
    [425000, 10], // gets to £750000
    [Infinity, 12]
]

/**
 * 
 * @param {Number} val the cost of the property
 * @returns a number, ie: not formatted as money
 */
const lbttCalculator = (val) => {
    let tax = 0, untaxedValue = val;
    for (let [bandWidth, rate] of taxBands) {
        let amountToTax = Math.min(untaxedValue, bandWidth)
        tax += (amountToTax * rate) / 100
        untaxedValue -= bandWidth
        // console.log({ tax, amountToTax, untaxedValue })
        if (untaxedValue <= 0) { break }
    }
    return tax
}

// console.log(lbttCalculator(145100))
module.exports = lbttCalculator