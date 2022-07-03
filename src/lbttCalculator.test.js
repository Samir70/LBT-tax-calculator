const lbttCalculator = require('./lbttCalculator');

const tests = [
    { cost: 145000, tax: 0 },
    { cost: 145100, tax: 2 },
    { cost: 160000, tax: 300 },
    { cost: 200000, tax: 1100 },
    { cost: 300000, tax: 4600 },
    { cost: 400000, tax: 13350 },
    { cost: 500000, tax: 23350 },
    { cost: 800000, tax: 54350 },
    // { cost: , tax:  },
]

describe('Tests where naive calculation gives whole number of pounds', () => {
    tests.forEach(t => {
        test(`Find the tax for a house costing £${t.cost}`, () => {
            expect(lbttCalculator(t.cost)).toEqual(t.tax)
        });
    })
});
