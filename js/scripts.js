var makeTriangle = function(side1, side2, side3) {

    var output = "";

    if (side1 + side2 < side3 || side2 + side3 < side1 || side1 + side3 < side2) {
        output = "This is not a triangle";
    } else if (side1 === side2 && side1 === side3) {
        output = "Equilateral";
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        output = "Isosceles";
    } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
        output = "Scalene";
    }

    return output;

};
