function calculate_area(radius) {
    return 3.14 * radius * radius;
}

function calculate_perimeter(radius) {
    return 2 * 3.14 * radius;
}

console.log("Area =", calculate_area(5));
console.log("Perimeter =", calculate_perimeter(5));

module.exports = {
    calculate_area,
    calculate_perimeter
};