window.discounts = [
    {code:"GIMME2", amount:2},
    {code:"GIMME5", amount:5},
    {code:"GIMME10", amount:10}
];

// Returns the discount where the code matches the supplied parameter
function getDiscountByCode(code) {
    let discounts = window.discounts.filter(discount => discount.code === code);

    // if the discount code doesn't exist, this will return null
    return discounts[0] || null;
}